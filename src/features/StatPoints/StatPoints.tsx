import React, { useState } from "react";
import { Counter, H3, Panel } from "@bigcommerce/big-design";
import { ABILITY_CAP, ABILITY_POINTS } from "db/constants";
import { Stats } from "db/types";
import { StyledStatsGrid } from "./styled";

export const StatPoints = () => {
  const [stats, setStats] = useState<Record<Stats, number>>({
    str: 0,
    dex: 0,
    con: 0,
    wis: 0,
    int: 0,
    cha: 0,
  })

  const calculateTotal = (v: Record<Stats, number>) => v.str + v.dex + v.con + v.wis + v.int + v.cha;

  const onCountChange = (value: number, stat: Stats) => {
    const total = calculateTotal(stats);
    const newStats = { ...stats, [stat]: value };
    const newTotal = calculateTotal(newStats);
    if (newTotal < total || total < ABILITY_POINTS) {
      setStats(newStats);
    }
  }

  return (
    <Panel header="Stat Points">
      <H3>You have selected {calculateTotal(stats)}/{ABILITY_POINTS} stat points.</H3>
      <StyledStatsGrid>
        <Counter
          label="Strength"
          value={stats.str}
          onCountChange={(v) => onCountChange(v, 'str')}
          min={0}
          max={ABILITY_CAP}
          required
        />
        <Counter
          label="Dexterity"
          value={stats.dex}
          onCountChange={(v) => onCountChange(v, 'dex')}
          min={0}
          max={ABILITY_CAP}
          required
        />
        <Counter
          label="Constitution"
          value={stats.con}
          onCountChange={(v) => onCountChange(v, 'con')}
          min={0}
          max={ABILITY_CAP}
          required
        />
        <Counter
          label="Wisdom"
          value={stats.wis}
          onCountChange={(v) => onCountChange(v, 'wis')}
          min={0}
          max={ABILITY_CAP}
          required
        />
        <Counter
          label="Intelligence"
          value={stats.int}
          onCountChange={(v) => onCountChange(v, 'int')}
          min={0}
          max={ABILITY_CAP}
          required
        />
        <Counter
          label="Charisma"
          value={stats.cha}
          onCountChange={(v) => onCountChange(v, 'cha')}
          min={0}
          max={ABILITY_CAP}
          required
        />
      </StyledStatsGrid>
    </Panel>
  );
};
