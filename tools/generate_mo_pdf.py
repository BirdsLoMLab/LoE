#!/usr/bin/env python3
"""Generate PDF for GoldenMo's Q&A on Core Skill vs Global Skill Bonus stacking."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    Preformatted, KeepTogether, HRFlowable
)
from reportlab.lib.enums import TA_CENTER, TA_LEFT

W, H = A4

styles = getSampleStyleSheet()

styles.add(ParagraphStyle('Title2', parent=styles['Title'],
    fontSize=22, textColor=HexColor('#14284F'), spaceAfter=4))
styles.add(ParagraphStyle('Subtitle', parent=styles['Normal'],
    fontSize=11, textColor=HexColor('#666666'), alignment=TA_CENTER, spaceAfter=4))
styles.add(ParagraphStyle('SectionHead', parent=styles['Heading1'],
    fontSize=14, textColor=HexColor('#1E3C78'), spaceBefore=16, spaceAfter=8))
styles.add(ParagraphStyle('Question', parent=styles['Normal'],
    fontSize=11, fontName='Helvetica-Bold', textColor=HexColor('#282828'),
    backColor=HexColor('#F0F5FF'), borderPadding=6, spaceBefore=6, spaceAfter=8,
    borderWidth=1, borderColor=HexColor('#C0D0E0')))
styles.add(ParagraphStyle('Answer', parent=styles['Normal'],
    fontSize=10, textColor=HexColor('#1E1E1E'), spaceAfter=6, leading=14))
styles.add(ParagraphStyle('Bold', parent=styles['Normal'],
    fontSize=10, fontName='Helvetica-Bold', textColor=HexColor('#1E1E1E'),
    spaceAfter=4, spaceBefore=6))
styles.add(ParagraphStyle('CodeBlock', parent=styles['Code'],
    fontSize=8, fontName='Courier', backColor=HexColor('#F5F5F5'),
    borderWidth=1, borderColor=HexColor('#D0D0D0'), borderPadding=6,
    spaceAfter=8, leading=11))
styles.add(ParagraphStyle('Note', parent=styles['Normal'],
    fontSize=9, fontName='Helvetica-Oblique', textColor=HexColor('#644610'),
    backColor=HexColor('#FFFAEB'), borderPadding=6, spaceAfter=8,
    borderWidth=1, borderColor=HexColor('#DCB450')))
styles.add(ParagraphStyle('Caveat', parent=styles['Normal'],
    fontSize=9, fontName='Helvetica-Oblique', textColor=HexColor('#5C1A1A'),
    backColor=HexColor('#FDF2F2'), borderPadding=6, spaceAfter=8,
    borderWidth=1, borderColor=HexColor('#D08080')))
styles.add(ParagraphStyle('SmallGrey', parent=styles['Normal'],
    fontSize=9, textColor=HexColor('#888888'), fontName='Helvetica-Oblique'))

def make_table(headers, rows, col_widths=None):
    data = [headers] + rows
    t = Table(data, repeatRows=1, colWidths=col_widths)
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HexColor('#1E3C78')),
        ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#FFFFFF')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('BACKGROUND', (0, 1), (-1, -1), HexColor('#FAFAFA')),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#CCCCCC')),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
    ]))
    return t

def build():
    doc = SimpleDocTemplate(
        '/home/user/LoE/loe_reverse_engineering/GoldenMo_QA.pdf',
        pagesize=A4, topMargin=20*mm, bottomMargin=20*mm,
        leftMargin=15*mm, rightMargin=15*mm,
        title="GoldenMo's Skill Stacking Q&A - Legend of Elements",
        author="LoE Reverse Engineering Project"
    )

    story = []

    # Title
    story.append(Paragraph("GoldenMo's Skill Stacking Question", styles['Title2']))
    story.append(Paragraph("Core Skill (Per-Skill-Type) vs GSB/GSR (All-Skill-Type)", styles['Subtitle']))
    story.append(Paragraph("Source: calcDamageNew() at L413500  |  _NumericType at L127017", styles['Subtitle']))
    story.append(Spacer(1, 12))
    story.append(HRFlowable(width="100%", color=HexColor('#CCCCCC')))
    story.append(Spacer(1, 8))

    # ---- The Question ----
    story.append(Paragraph("The Question", styles['SectionHead']))
    story.append(Paragraph(
        "What's the relationship between Core skill / reduction and GSB / GSR? "
        "Since both apply at Step 10, are they additive or multiplicative with each other? "
        "Example: with an effective +150% Core skill bonus and +110% Global skill bonus, "
        "are they added together or multiplied?",
        styles['Question']))

    # ---- Short answer ----
    story.append(Paragraph("Short answer", styles['SectionHead']))
    story.append(Paragraph(
        "<b>They are ADDITIVE with each other</b> — they live inside the same Step 10 bracket "
        "and stack into one summed factor, NOT two separate multipliers.",
        styles['Answer']))

    story.append(Preformatted(
        "Your example: +150% Core skill bonus, +110% Global skill bonus on a skill hit:\n"
        "\n"
        "  Additive (CORRECT):     x (1 + 1.50 + 1.10) = x 3.60   <-- THIS\n"
        "  Multiplicative (WRONG): x 2.50 x 2.10       = x 5.25   <-- NOT this\n"
        "\n"
        "(Assuming opponent has 0 corresponding reductions and ignoring A/B split.)",
        styles['CodeBlock']))

    story.append(Paragraph(
        "Important contrast with the GDB/GSB case from Q2: GDB lives at Step 9, Global Skill at "
        "Step 10. Different steps = different multiplier brackets = they multiply. "
        "Core Skill and Global Skill are BOTH at Step 10 = same bracket = they add.",
        styles['Note']))

    # ---- Why ----
    story.append(Paragraph("Why they add: structure of Step 10", styles['SectionHead']))

    story.append(Paragraph(
        "Step 10 is the &quot;source-specific damage&quot; layer. The code picks a contested pair "
        "of stats based on what KIND of damage source fired (normal attack, core skill, active skill, "
        "spirit, pet, etc.), then applies a SINGLE multiplier built from that pair plus any "
        "skill-scope modifiers that apply.",
        styles['Answer']))

    story.append(Paragraph("The three skill-scope stat groups all feed Step 10:", styles['Bold']))

    story.append(make_table(
        ['Layer', 'Add Stat (ID)', 'Sub Stat (ID)', 'Scope'],
        [
            ['Per-Action (Core Skill)',  'PlayerAtkSkillA (1020) / B (1058)', 'PlayerDefSkillA (1021) / B (1059)', 'Core skill only'],
            ['Per-Skill-Type',           'SkillDamageAddA (1086) / B (1088)', 'SkillDamageSubA (1087) / B (1089)', 'A specific skill category'],
            ['All-Skill-Type (GSB/GSR)', 'AllSkillTypeAddA (1095) / B (1097)', 'AllSkillTypeSubA (1096) / B (1098)', 'Every skill-tagged hit'],
        ],
        col_widths=[42*mm, 50*mm, 50*mm, 38*mm]))
    story.append(Spacer(1, 6))

    story.append(Paragraph(
        "All three groups are split into A and B components (mirroring the source-specific pair). "
        "Inside each component, the matching stats SUM together, then the contested defender stats "
        "are subtracted, then the result is wrapped in a single max(floor, 1 + ...) bracket.",
        styles['Answer']))

    story.append(Paragraph("Effective Step 10 formula (skill hit, action type 4):", styles['Bold']))
    story.append(Preformatted(
        "// A-component sum\n"
        "addA = PlayerAtkSkillA + SkillDamageAddA + AllSkillTypeAddA\n"
        "subA = PlayerDefSkillA + SkillDamageSubA + AllSkillTypeSubA\n"
        "factorA = max(floor, 1 + addA - subA)\n"
        "\n"
        "// B-component sum (buff 29/30/31/38/40/45/65 add into st here)\n"
        "addB = PlayerAtkSkillB + SkillDamageAddB + AllSkillTypeAddB + buffStacks\n"
        "subB = PlayerDefSkillB + SkillDamageSubB + AllSkillTypeSubB\n"
        "factorB = max(floor, 1 + addB - subB)\n"
        "\n"
        "damage *= factorA * factorB",
        styles['CodeBlock']))

    story.append(Paragraph(
        "Within factorA, every &quot;Add&quot; bonus you stack — whether it came from Core Skill, "
        "Per-Skill-Type, or All-Skill-Type — gets summed before the multiply. That is the additive "
        "behavior. Across A and B (and across Step 9 GDB), separate brackets multiply.",
        styles['Answer']))

    # ---- Worked example ----
    story.append(Paragraph("Worked example with Mo's numbers", styles['SectionHead']))
    story.append(Paragraph(
        "Setup: attacker has +150% Core skill bonus (read as PlayerAtkSkillA = 1.50, "
        "SkillDamageAddA = 0, treating &quot;Core skill bonus&quot; as the contested per-action pair "
        "for case 4) and +110% Global skill bonus (AllSkillTypeAddA = 1.10). Defender has 0 in all "
        "the matching subtractor stats. Ignoring B-component, GDB, crit, and floors for clarity.",
        styles['Answer']))

    story.append(Preformatted(
        "addA  = 1.50 (core) + 1.10 (global skill) = 2.60\n"
        "subA  = 0\n"
        "factorA = max(0.3, 1 + 2.60 - 0) = 3.60x\n"
        "\n"
        "Damage at end of Step 10 = base x 3.60\n"
        "\n"
        "If they multiplied (the WRONG model):\n"
        "  (1 + 1.50) x (1 + 1.10) = 2.50 x 2.10 = 5.25x\n"
        "\n"
        "Real game: 3.60x.  Naive multiply guess: 5.25x.  Gap: ~46%.",
        styles['CodeBlock']))

    story.append(Paragraph(
        "Practical takeaway: between Core skill bonus and Global skill bonus, you get diminishing "
        "returns — every additional point goes into the same big sum. To get a true multiplicative "
        "boost, you must invest into a DIFFERENT step (GDB at Step 9, Crit/Focus/Break at Steps "
        "6&ndash;8, or any of the Step 11 buff multipliers).",
        styles['Note']))

    # ---- Reduction side ----
    story.append(Paragraph("The reduction side (Core Skill DEF vs GSR)", styles['SectionHead']))
    story.append(Paragraph(
        "Same rule, opposite sign. The defender's PlayerDefSkillA (1021), SkillDamageSubA (1087), "
        "and AllSkillTypeSubA (1096) all SUM together and are subtracted from the attacker's add-pool "
        "inside the same Step 10 bracket.",
        styles['Answer']))
    story.append(Preformatted(
        "Attacker: +150% core skill, +110% global skill\n"
        "Defender:  +50% core skill reduction, +30% global skill reduction\n"
        "\n"
        "factorA = max(0.3, 1 + (1.50 + 1.10) - (0.50 + 0.30))\n"
        "        = max(0.3, 1 + 2.60 - 0.80)\n"
        "        = 2.80x",
        styles['CodeBlock']))

    story.append(Paragraph(
        "Because the reductions are summed together and then subtracted (not applied as a multiplier "
        "of their own), one big stack of Core Skill reduction and one big stack of GSR are roughly "
        "equivalent point-for-point on defense — there is no compounding bonus from splitting them.",
        styles['Answer']))

    # ---- Caveats ----
    story.append(Paragraph("Caveats / what the code doesn't fully show", styles['SectionHead']))
    story.append(Paragraph(
        "The extracted fragment of calcDamageNew (stat_system_O_L413500.js) cuts off after "
        "the source-specific case statement populates its variables, before the lines that fold "
        "SkillDamageAddA (1086) and AllSkillTypeAddA (1095) into that bracket. The conclusion above "
        "is read off (a) the Step labelling already used in the existing reverse-engineering notes, "
        "(b) the parallel A/B variable structure shared by all three skill-scope stat groups, and "
        "(c) the explicit cross-step contrast Frisky's PDF made between GDB (Step 9) and Global "
        "Skill (Step 10).",
        styles['Caveat']))
    story.append(Paragraph(
        "If anyone gets the full bundle dumped past line 413630, the ground-truth lines to read "
        "are the ones that compute factorA / factorB right after the case-b switch, before the "
        "Buff 11 / 16 / 25 multipliers in Step 11.",
        styles['Caveat']))

    # ---- Summary ----
    story.append(Paragraph("Quick reference: which stats stack how", styles['SectionHead']))
    story.append(make_table(
        ['Stats', 'Same step?', 'Stack as', 'Why'],
        [
            ['Core Skill bonus + GSB',     'Yes (both Step 10)', 'ADDITIVE',       'Same factorA bracket'],
            ['Core Skill red. + GSR',      'Yes (both Step 10)', 'ADDITIVE',       'Same factorA bracket'],
            ['GDB + GSB',                  'No (Step 9 vs 10)',  'MULTIPLICATIVE', 'Two separate brackets'],
            ['GDB + Core Skill bonus',     'No (Step 9 vs 10)',  'MULTIPLICATIVE', 'Two separate brackets'],
            ['A-component + B-component',  'No (within Step 10)', 'MULTIPLICATIVE', 'factorA x factorB'],
            ['Crit / Focus / Break',       'No (Steps 6/7/8)',   'MULTIPLICATIVE', 'Each is own multiplier'],
        ],
        col_widths=[55*mm, 38*mm, 32*mm, 55*mm]))

    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "Data extracted from decompiled bundle-ac7a6.js. calcDamageNew at L413500, "
        "_NumericType enum at L127017. No community wiki sources used.",
        styles['SmallGrey']))

    doc.build(story)
    print(f"PDF saved to: {doc.filename}")

    import os
    print(f"Size: {os.path.getsize(doc.filename) / 1024:.1f} KB")

if __name__ == '__main__':
    build()
