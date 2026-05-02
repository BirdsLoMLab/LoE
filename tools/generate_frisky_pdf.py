#!/usr/bin/env python3
"""Generate PDF for Sir Frisky's Q&A on LoE combat mechanics."""

from fpdf import FPDF

class LoEPDF(FPDF):
    def header(self):
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(100, 100, 100)
        self.cell(0, 8, 'Legend of Elements - Combat Mechanics Q&A', align='C')
        self.ln(4)
        self.set_draw_color(200, 200, 200)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(6)

    def footer(self):
        self.set_y(-15)
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, f'Page {self.page_no()}/{{nb}}  |  Source: bundle-ac7a6.js (code-verified)', align='C')

    def section_title(self, title):
        self.set_font('Helvetica', 'B', 14)
        self.set_text_color(30, 60, 120)
        self.cell(0, 10, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(30, 60, 120)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(4)

    def question_box(self, q_num, question):
        self.set_fill_color(240, 245, 255)
        self.set_font('Helvetica', 'B', 11)
        self.set_text_color(40, 40, 40)
        x = self.get_x()
        y = self.get_y()
        self.set_x(10)
        self.multi_cell(190, 7, f'Q{q_num}: {question}', border=1, fill=True)
        self.ln(3)

    def answer_text(self, text):
        self.set_font('Helvetica', '', 10)
        self.set_text_color(30, 30, 30)
        self.multi_cell(190, 5.5, text)
        self.ln(2)

    def code_block(self, code):
        self.set_font('Courier', '', 9)
        self.set_fill_color(245, 245, 245)
        self.set_text_color(50, 50, 50)
        self.set_draw_color(200, 200, 200)
        lines = code.strip().split('\n')
        x = self.get_x()
        y = self.get_y()
        block_h = len(lines) * 5 + 6
        if y + block_h > 270:
            self.add_page()
        self.rect(12, self.get_y(), 186, block_h)
        self.set_xy(14, self.get_y() + 3)
        for line in lines:
            self.cell(0, 5, line, new_x="LMARGIN", new_y="NEXT")
            self.set_x(14)
        self.ln(5)

    def table_row(self, cols, widths, bold=False, header=False):
        self.set_font('Helvetica', 'B' if bold or header else '', 9)
        if header:
            self.set_fill_color(30, 60, 120)
            self.set_text_color(255, 255, 255)
        else:
            self.set_fill_color(250, 250, 250)
            self.set_text_color(30, 30, 30)
        for i, (col, w) in enumerate(zip(cols, widths)):
            self.cell(w, 6, col, border=1, fill=True, align='L' if i == 0 else 'C')
        self.ln()

    def bold_text(self, text):
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(30, 30, 30)
        self.multi_cell(190, 5.5, text)
        self.ln(1)

    def note_box(self, text):
        self.set_fill_color(255, 250, 235)
        self.set_draw_color(220, 180, 80)
        self.set_font('Helvetica', 'I', 9)
        self.set_text_color(100, 70, 20)
        y = self.get_y()
        self.rect(12, y, 186, 14, style='DF')
        self.set_xy(14, y + 2)
        self.multi_cell(182, 5, text)
        self.ln(4)


def build_pdf():
    pdf = LoEPDF()
    pdf.alias_nb_pages()
    pdf.set_auto_page_break(auto=True, margin=20)
    pdf.add_page()

    # Title
    pdf.set_font('Helvetica', 'B', 22)
    pdf.set_text_color(20, 40, 80)
    pdf.cell(0, 15, 'Sir Frisky\'s Combat Questions', align='C', new_x="LMARGIN", new_y="NEXT")
    pdf.set_font('Helvetica', '', 11)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 8, 'Answered from code-verified reverse engineering of bundle-ac7a6.js', align='C', new_x="LMARGIN", new_y="NEXT")
    pdf.cell(0, 6, 'Source: calcDamageNew() at L413500  |  _NumericType at L127017', align='C', new_x="LMARGIN", new_y="NEXT")
    pdf.ln(8)

    # ---- Q1 ----
    pdf.section_title('1. Core Skill Reduction & Caps')
    pdf.question_box(1, 'Where do things like core skill reduction come in? Are there maxes?')

    pdf.answer_text(
        'Core skill damage goes through Step 10: Source-Specific Damage in the damage pipeline. '
        'This is a SEPARATE multiplier layer that runs AFTER GDB/GDR (Step 9). It is NOT the same as GDB/GDR.'
    )

    pdf.bold_text('The contested stat pairs for Core Skill damage:')
    pdf.code_block(
        'Core Skill Attacker: PlayerAtkSkillA (ID 1020) + PlayerAtkSkillB (ID 1058)\n'
        'Core Skill Defender: PlayerDefSkillA (ID 1021) + PlayerDefSkillB (ID 1059)\n'
        '\n'
        'Both A and B components stack additively, then applied as multiplier.'
    )

    pdf.answer_text(
        'There is NO hardcoded cap on source-specific damage modifiers in the extracted code. '
        'Unlike dodge (70% cap) or block (50% cap), the skill damage multipliers have no '
        'clamp() or Math.min() applied.'
    )

    pdf.bold_text('Core Skill also gets its own separate Crit Rate:')
    pdf.code_block(
        'CoreSkillCrit (ID 1048) -- adds ON TOP of base Crit (ID 1008)\n'
        '\n'
        'Effective crit for core skills:\n'
        '  critChance = (Crit - CritDef) + CoreSkillCrit\n'
        '  critChance = clamp(critChance, 0, 1)   // capped at 100%'
    )

    pdf.answer_text(
        'Additionally, Buffs 29, 30, 31, 54, and 65 add extra core skill bonuses. '
        'These are layered on in Step 11 (Buff Modifiers) and have no visible cap in the code.'
    )

    # ---- Q2 ----
    pdf.add_page()
    pdf.section_title('2. Global Skill Damage vs GDB/GDR')
    pdf.question_box(2, 'Where does global skill damage/global skill reduction come into play? Is it same as GDR/GDB?')

    pdf.bold_text('No, they are DIFFERENT stats at DIFFERENT pipeline steps.')

    w = [55, 45, 25, 65]
    pdf.table_row(['Layer', 'Stats', 'Step', 'What It Does'], w, header=True)
    pdf.table_row(['GDB / GDR', 'AllDamAdd (1038) /', '9', 'ALL damage universally.'], w)
    pdf.table_row(['', 'AllDamDef (1039)', '', 'Floor at 0.3 (30%).'], w)
    pdf.table_row(['All Skill Type', 'AllSkillTypeAddA (1095)', '10', 'Bonus for ALL skill-type'], w)
    pdf.table_row(['', 'AllSkillTypeSubA (1096)', '', 'damage specifically.'], w)
    pdf.table_row(['Per-Skill-Type', 'SkillDamageAddA (1086)', '10', 'Bonus for individual'], w)
    pdf.table_row(['', 'SkillDamageSubA (1087)', '', 'skill categories.'], w)
    pdf.ln(4)

    pdf.answer_text(
        'GDB (AllDamAdd) affects EVERYTHING -- normal attacks, skills, spirits, pets, all of it. '
        'Global skill damage (AllSkillTypeAdd) only affects skill-based damage sources.'
    )

    pdf.bold_text('They multiply together, not add:')
    pdf.code_block(
        'If you have +50% GDB and +30% global skill damage on a skill hit:\n'
        '\n'
        '  Multiplicative: x 1.5 x 1.3 = x 1.95 total    <-- THIS is how it works\n'
        '  Additive:       x (1 + 0.5 + 0.3) = x 1.8      <-- NOT this'
    )

    pdf.note_box(
        'Key insight: Because these are separate multiplier steps, investing in BOTH GDB and '
        'global skill damage gives better returns than putting everything into one stat.'
    )

    # ---- Q3 ----
    pdf.add_page()
    pdf.section_title('3. GDR/GDB Math Contradictions')
    pdf.question_box(3, 'GDR/GDB seems contradictory in terms of the maths and the end result')

    pdf.bold_text('The exact formula from game code (L413500, line 61):')
    pdf.code_block(
        'damage *= Math.max(0.3, 1 + attacker.AllDamAdd - target.AllDamDef)\n'
        '\n'
        'Where:\n'
        '  AllDamAdd = attacker\'s GDB (float, e.g. 0.5 = 50%)\n'
        '  AllDamDef = target\'s GDR (float, e.g. 0.5 = 50%)\n'
        '  Floor = 0.3 (damage can NEVER go below 30%)'
    )

    pdf.bold_text('Why it feels contradictory -- two reasons:')

    pdf.answer_text(
        'Reason 1: The 0.3 floor creates diminishing returns for GDR. '
        'Once the defender stacks enough GDR to push the multiplier to 0.3, ALL additional '
        'GDR investment is completely wasted. Meanwhile, every point of attacker GDB pulls '
        'the multiplier back up from that floor. This makes GDR feel weaker than it should be '
        'at high values.'
    )

    pdf.code_block(
        'Example (both have 0.5):\n'
        '  max(0.3, 1 + 0.5 - 0.5) = max(0.3, 1.0) = 1.0x  -- they cancel out\n'
        '\n'
        'Example (defender stacks GDR to 1.0):\n'
        '  max(0.3, 1 + 0.5 - 1.0) = max(0.3, 0.5) = 0.5x  -- only 50% reduction\n'
        '\n'
        'Example (defender stacks GDR to 2.0):\n'
        '  max(0.3, 1 + 0.5 - 2.0) = max(0.3, -0.5) = 0.3x  -- FLOOR hit, wasted GDR'
    )

    pdf.answer_text(
        'Reason 2: GDB/GDR is only Step 9 of 11. Even if GDR cuts damage to 30%, the damage '
        'STILL gets multiplied by Crit (2x+), Focus (2x+), Break (2x+), and source-specific '
        'bonuses in Steps 6-8 and 10. Those post-GDR multipliers bring the final number back up, '
        'making GDR feel less impactful than the raw math suggests.'
    )

    pdf.bold_text('The full multiplication chain:')
    pdf.code_block(
        'Final = Base x SkillRatio x Block x DILI x Crit x Focus x Break\n'
        '        x GDB/GDR x SourceBonus x Buffs\n'
        '\n'
        'Even at GDR floor (0.3x), if Crit+Focus+Break all proc:\n'
        '  0.3 x 2.0 x 2.0 x 2.0 = 2.4x  (still MORE than base damage!)'
    )

    pdf.note_box(
        'Bottom line: GDR is strong but has a hard floor at 30%. Past that floor, '
        'investing in Crit/Focus/Break resistance (CritDef, Crit2_Def, POLING_DEF) '
        'may give better defensive returns than more GDR.'
    )

    # ---- Q4 ----
    pdf.add_page()
    pdf.section_title('4. Starsoul / Fate / Glyphs Not Matching')
    pdf.question_box(4, 'Starsoul isn\'t applying as expected, fate levels/glyphs aren\'t close to expected result')

    pdf.bold_text('The answer is the 5-Tier Stat Scaling system.')

    pdf.answer_text(
        'Every stat in the game uses a 5-tier calculation where bonuses from different '
        'sources go into DIFFERENT tiers. This means they DON\'T add together simply -- '
        'they multiply at different stages.'
    )

    pdf.code_block(
        'FinalStat = ((Base + Add) x (1 + Pct/10000) + FinalAdd) x (1 + FinalPct/10000)\n'
        '\n'
        'Tier 1: Base       -- from class/level\n'
        'Tier 2: Add        -- flat bonuses (some gear)\n'
        'Tier 3: Pct        -- percentage bonuses (possibly starsoul?)\n'
        'Tier 4: FinalAdd   -- late-game flat adds (possibly fate?)\n'
        'Tier 5: FinalPct   -- late-game percentage (possibly glyphs?)'
    )

    pdf.bold_text('Why the math doesn\'t match simple expectations:')

    pdf.answer_text(
        'If starsoul goes into Tier 3 (Pct) and fate/glyphs go into Tier 4/5 (FinalAdd/FinalPct), '
        'starsoul\'s percentage only multiplies (Base + Add), NOT the fate/glyph bonuses. '
        'Meanwhile, glyph\'s FinalPct multiplies EVERYTHING including starsoul\'s contribution.'
    )

    pdf.code_block(
        'Example: Base=100, Add=50, Starsoul(Pct)=20%, Fate(FinalAdd)=200, Glyph(FinalPct)=10%\n'
        '\n'
        'Correct (5-tier):\n'
        '  ((100 + 50) x (1 + 0.20) + 200) x (1 + 0.10)\n'
        '  = (150 x 1.20 + 200) x 1.10\n'
        '  = (180 + 200) x 1.10\n'
        '  = 380 x 1.10 = 418\n'
        '\n'
        'Naive additive expectation:\n'
        '  (100 + 50 + 200) x (1 + 0.20 + 0.10)\n'
        '  = 350 x 1.30 = 455    <-- WRONG, overestimates by 37 points\n'
        '\n'
        'The difference (455 vs 418) is why starsoul feels weaker than expected.'
    )

    pdf.note_box(
        'Without CDN config data showing exactly which tier each source (starsoul, fate, glyphs) '
        'feeds into, we can\'t give exact numbers. But this 5-tier system IS the explanation '
        'for why bonuses don\'t add up the way you\'d expect with simple math.'
    )

    pdf.answer_text(
        'To determine the exact tier assignments, use the console dump script '
        '(tools/dump_configs.js) to extract ConfigManager data at runtime. '
        'The config tables will show which NumericType sub-IDs each system modifies.'
    )

    # ---- Summary ----
    pdf.add_page()
    pdf.section_title('Summary: Quick Reference')

    pdf.bold_text('Damage Pipeline (11 Steps):')
    pdf.code_block(
        'Step  1: Dodge        -- cap 70%, contested (DODGE vs DODGE_DEF)\n'
        'Step  2: Base Damage  -- ATK - DEF with penetration\n'
        'Step  3: Skill Ratio  -- coefficient / 10000\n'
        'Step  4: Block        -- cap 50% chance, 50% damage reduction\n'
        'Step  5: DILI         -- low-HP defense, cap 90% reduction\n'
        'Step  6: Crit         -- min 200% multiplier, per-action-type rates\n'
        'Step  7: Focus/Crit2  -- min 200% multiplier, independent roll\n'
        'Step  8: Break/POLING -- min 200% multiplier, independent roll\n'
        'Step  9: GDB/GDR      -- max(0.3, 1 + GDB - GDR)  <-- 30% FLOOR\n'
        'Step 10: Source Bonus  -- per-action-type (attack/skill/spirit/pet/etc)\n'
        'Step 11: Buff Mods    -- buff 11, 16, 25, 29, 30, 31, 38, 40, etc.'
    )

    pdf.bold_text('Key Stat IDs:')
    w2 = [25, 60, 105]
    pdf.table_row(['ID', 'Name', 'Purpose'], w2, header=True)
    pdf.table_row(['1038', 'AllDamAdd', 'GDB -- multiplies ALL damage'], w2)
    pdf.table_row(['1039', 'AllDamDef', 'GDR -- reduces ALL damage (floor 0.3)'], w2)
    pdf.table_row(['1095', 'AllSkillTypeAddA', 'Global Skill Damage (NOT same as GDB)'], w2)
    pdf.table_row(['1096', 'AllSkillTypeSubA', 'Global Skill Reduction (NOT same as GDR)'], w2)
    pdf.table_row(['1020', 'PlayerAtkSkillA', 'Core Skill Damage Bonus A'], w2)
    pdf.table_row(['1058', 'PlayerAtkSkillB', 'Core Skill Damage Bonus B'], w2)
    pdf.table_row(['1048', 'CoreSkillCrit', 'Core Skill Crit Rate (stacks on base Crit)'], w2)
    pdf.table_row(['1086', 'SkillDamageAddA', 'Per-skill-type damage bonus'], w2)
    pdf.ln(4)

    pdf.set_font('Helvetica', 'I', 9)
    pdf.set_text_color(120, 120, 120)
    pdf.multi_cell(190, 5,
        'All data extracted from decompiled game client bundle-ac7a6.js '
        '(17MB, 426K lines). No community wiki sources used. '
        'Formulas verified against calcDamageNew() at bundle line 413500 '
        'and _NumericType enum at bundle line 127017.'
    )

    return pdf


if __name__ == '__main__':
    pdf = build_pdf()
    path = '/home/user/LoE/loe_reverse_engineering/Sir_Frisky_QA.pdf'
    pdf.output(path)
    print(f'PDF saved to: {path}')
    print(f'Size: {__import__("os").path.getsize(path) / 1024:.1f} KB')
