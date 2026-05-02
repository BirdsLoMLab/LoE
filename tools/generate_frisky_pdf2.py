#!/usr/bin/env python3
"""Generate PDF for Sir Frisky's Q&A using reportlab."""

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
styles.add(ParagraphStyle('SmallGrey', parent=styles['Normal'],
    fontSize=9, textColor=HexColor('#888888'), fontName='Helvetica-Oblique'))

def make_table(headers, rows):
    data = [headers] + rows
    t = Table(data, repeatRows=1)
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
        '/home/user/LoE/loe_reverse_engineering/Sir_Frisky_QA.pdf',
        pagesize=A4, topMargin=20*mm, bottomMargin=20*mm,
        leftMargin=15*mm, rightMargin=15*mm,
        title="Sir Frisky's Combat Q&A - Legend of Elements",
        author="LoE Reverse Engineering Project"
    )

    story = []

    # Title
    story.append(Paragraph("Sir Frisky's Combat Questions", styles['Title2']))
    story.append(Paragraph("Answered from code-verified reverse engineering of bundle-ac7a6.js", styles['Subtitle']))
    story.append(Paragraph("Source: calcDamageNew() at L413500  |  _NumericType at L127017", styles['Subtitle']))
    story.append(Spacer(1, 12))
    story.append(HRFlowable(width="100%", color=HexColor('#CCCCCC')))
    story.append(Spacer(1, 8))

    # ---- Q1 ----
    story.append(Paragraph("1. Core Skill Reduction &amp; Caps", styles['SectionHead']))
    story.append(Paragraph(
        "Q1: Where do things like core skill reduction come in? Are there maxes?",
        styles['Question']))

    story.append(Paragraph(
        "Core skill damage goes through <b>Step 10: Source-Specific Damage</b> in the damage pipeline. "
        "This is a SEPARATE multiplier layer that runs AFTER GDB/GDR (Step 9). It is NOT the same as GDB/GDR.",
        styles['Answer']))

    story.append(Paragraph("The contested stat pairs for Core Skill damage:", styles['Bold']))
    story.append(Preformatted(
        "Core Skill Attacker: PlayerAtkSkillA (ID 1020) + PlayerAtkSkillB (ID 1058)\n"
        "Core Skill Defender: PlayerDefSkillA (ID 1021) + PlayerDefSkillB (ID 1059)\n"
        "\n"
        "Both A and B components stack additively, then applied as multiplier.",
        styles['CodeBlock']))

    story.append(Paragraph(
        "There is <b>NO hardcoded cap</b> on source-specific damage modifiers in the extracted code. "
        "Unlike dodge (70% cap) or block (50% cap), the skill damage multipliers have no "
        "clamp() or Math.min() applied.",
        styles['Answer']))

    story.append(Paragraph("Core Skill also gets its own separate Crit Rate:", styles['Bold']))
    story.append(Preformatted(
        "CoreSkillCrit (ID 1048) -- adds ON TOP of base Crit (ID 1008)\n"
        "\n"
        "Effective crit for core skills:\n"
        "  critChance = (Crit - CritDef) + CoreSkillCrit\n"
        "  critChance = clamp(critChance, 0, 1)   // capped at 100%",
        styles['CodeBlock']))

    story.append(Paragraph(
        "Buffs 29, 30, 31, 54, and 65 add extra core skill bonuses in Step 11. No visible cap.",
        styles['Answer']))

    # ---- Q2 ----
    story.append(Paragraph("2. Global Skill Damage vs GDB/GDR", styles['SectionHead']))
    story.append(Paragraph(
        "Q2: Where does global skill damage/global skill reduction come into play? Is it same as GDR/GDB?",
        styles['Question']))

    story.append(Paragraph("No, they are DIFFERENT stats at DIFFERENT pipeline steps.", styles['Bold']))

    story.append(make_table(
        ['Layer', 'Stat IDs', 'Step', 'What It Does'],
        [
            ['GDB / GDR', 'AllDamAdd (1038) / AllDamDef (1039)', '9', 'ALL damage universally. Floor 0.3.'],
            ['All Skill Type', 'AllSkillTypeAddA (1095) / SubA (1096)', '10', 'ALL skill-type damage only.'],
            ['Per-Skill-Type', 'SkillDamageAddA (1086) / SubA (1087)', '10', 'Individual skill categories.'],
        ]))
    story.append(Spacer(1, 6))

    story.append(Paragraph(
        "GDB affects EVERYTHING. Global skill damage only affects skill-based sources. "
        "They multiply together:",
        styles['Answer']))
    story.append(Preformatted(
        "+50% GDB and +30% global skill damage on a skill hit:\n"
        "\n"
        "  Multiplicative: x 1.5 x 1.3 = x 1.95 total    <-- THIS is how it works\n"
        "  Additive:       x (1 + 0.5 + 0.3) = x 1.8      <-- NOT this",
        styles['CodeBlock']))
    story.append(Paragraph(
        "Key insight: Because these are separate multiplier steps, investing in BOTH GDB and "
        "global skill damage gives better returns than putting everything into one stat.",
        styles['Note']))

    # ---- Q3 ----
    story.append(Paragraph("3. GDR/GDB Math Contradictions", styles['SectionHead']))
    story.append(Paragraph(
        "Q3: GDR/GDB seems contradictory in terms of the maths and the end result",
        styles['Question']))

    story.append(Paragraph("The exact formula from game code (L413500, line 61):", styles['Bold']))
    story.append(Preformatted(
        "damage *= Math.max(0.3, 1 + attacker.AllDamAdd - target.AllDamDef)\n"
        "\n"
        "  AllDamAdd = attacker's GDB (float, e.g. 0.5 = 50%)\n"
        "  AllDamDef = target's GDR (float, e.g. 0.5 = 50%)\n"
        "  Floor = 0.3 (damage can NEVER go below 30%)",
        styles['CodeBlock']))

    story.append(Paragraph("Why it feels contradictory -- two reasons:", styles['Bold']))

    story.append(Paragraph(
        "<b>Reason 1: The 0.3 floor.</b> Once GDR pushes the multiplier to 0.3, ALL additional GDR "
        "is wasted. Meanwhile, every point of attacker GDB pulls back up from the floor. "
        "This makes GDR feel weaker at high values.",
        styles['Answer']))

    story.append(Preformatted(
        "Both 0.5:  max(0.3, 1 + 0.5 - 0.5) = 1.0x   -- cancel out\n"
        "GDR = 1.0: max(0.3, 1 + 0.5 - 1.0) = 0.5x   -- only 50% reduction\n"
        "GDR = 2.0: max(0.3, 1 + 0.5 - 2.0) = 0.3x   -- FLOOR hit, wasted GDR",
        styles['CodeBlock']))

    story.append(Paragraph(
        "<b>Reason 2: Post-GDR multipliers.</b> Even at the 0.3 floor, Crit (2x+), Focus (2x+), "
        "and Break (2x+) still multiply AFTER GDR. If all three proc:",
        styles['Answer']))
    story.append(Preformatted(
        "0.3 x 2.0 x 2.0 x 2.0 = 2.4x  (still MORE than base damage!)",
        styles['CodeBlock']))
    story.append(Paragraph(
        "Bottom line: GDR is strong but has a hard floor. Past that floor, investing in "
        "Crit/Focus/Break resistance (CritDef, Crit2_Def, POLING_DEF) may give better "
        "defensive returns than more GDR.",
        styles['Note']))

    # ---- Q4 ----
    story.append(Paragraph("4. Starsoul / Fate / Glyphs Mismatch", styles['SectionHead']))
    story.append(Paragraph(
        "Q4: Starsoul isn't applying as expected, fate levels/glyphs aren't close to expected result",
        styles['Question']))

    story.append(Paragraph("The answer is the 5-Tier Stat Scaling system.", styles['Bold']))
    story.append(Preformatted(
        "FinalStat = ((Base + Add) x (1 + Pct/10000) + FinalAdd) x (1 + FinalPct/10000)\n"
        "\n"
        "Tier 1: Base       -- from class/level\n"
        "Tier 2: Add        -- flat bonuses (some gear)\n"
        "Tier 3: Pct        -- percentage bonuses (possibly starsoul?)\n"
        "Tier 4: FinalAdd   -- late-game flat adds (possibly fate?)\n"
        "Tier 5: FinalPct   -- late-game percentage (possibly glyphs?)",
        styles['CodeBlock']))

    story.append(Paragraph(
        "If starsoul goes into Tier 3 (Pct) and fate/glyphs go into Tier 4/5, starsoul's "
        "percentage only multiplies (Base + Add), NOT the fate/glyph bonuses.",
        styles['Answer']))

    story.append(Preformatted(
        "Example: Base=100, Add=50, Starsoul(Pct)=20%, Fate(FinalAdd)=200, Glyph(FinalPct)=10%\n"
        "\n"
        "Correct (5-tier):\n"
        "  ((100 + 50) x 1.20 + 200) x 1.10 = (180 + 200) x 1.10 = 418\n"
        "\n"
        "Naive additive:\n"
        "  (100 + 50 + 200) x (1 + 0.20 + 0.10) = 350 x 1.30 = 455\n"
        "\n"
        "Difference: 455 vs 418 = starsoul feels 37 points weaker than expected",
        styles['CodeBlock']))

    story.append(Paragraph(
        "Without CDN config data showing exactly which tier each source feeds into, we can't "
        "give exact numbers. But this 5-tier system IS the explanation for why bonuses don't "
        "add up the way you'd expect. Use tools/dump_configs.js to extract tier assignments.",
        styles['Note']))

    # ---- Summary ----
    story.append(Paragraph("Quick Reference: Damage Pipeline", styles['SectionHead']))
    story.append(Preformatted(
        "Step  1: Dodge        -- cap 70%, contested\n"
        "Step  2: Base Damage  -- ATK - DEF with penetration\n"
        "Step  3: Skill Ratio  -- coefficient / 10000\n"
        "Step  4: Block        -- cap 50% chance, 50% damage reduction\n"
        "Step  5: DILI         -- low-HP defense, cap 90%\n"
        "Step  6: Crit         -- min 200% multiplier\n"
        "Step  7: Focus/Crit2  -- min 200% multiplier\n"
        "Step  8: Break/POLING -- min 200% multiplier\n"
        "Step  9: GDB/GDR      -- max(0.3, 1 + GDB - GDR)  <-- 30% FLOOR\n"
        "Step 10: Source Bonus  -- per-action-type (skill/spirit/pet/etc)\n"
        "Step 11: Buff Mods    -- buff 11, 16, 25, 29, 30, 31, 38, etc.",
        styles['CodeBlock']))

    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "All data extracted from decompiled game client bundle-ac7a6.js (17MB, 426K lines). "
        "No community wiki sources used. Formulas verified against calcDamageNew() at "
        "bundle line 413500 and _NumericType enum at bundle line 127017.",
        styles['SmallGrey']))

    doc.build(story)
    print(f"PDF saved to: {doc.filename}")

    import os
    print(f"Size: {os.path.getsize(doc.filename) / 1024:.1f} KB")

if __name__ == '__main__':
    build()
