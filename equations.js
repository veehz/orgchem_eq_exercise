const equations = [
  {
    from: "烯烃",
    to: "烷烃",
    equation: "H3CCH=CH2 + H2 ->[Pt/Pd/Ni] H2CCH2CH3",
  },
  {
    from: "烯烃",
    to: "醇",
    msg: "脱水",
    equation: "H2C=CH2 + H2O ->[\\ce{H+}][\\Delta] H3CCH2OH",
  },
  {
    from: "烯烃",
    to: "卤代烃",
    msg: "卤化",
    katex: `\\text{1 mol:}\\ \\ce{H2C=CH2 + HCl -> H2CCH2Cl}\\\\
    \\text{2 mol:}\\ \\ce{H2C=CH2 + 2HCl ->[\\ce{CCl4}] H2CCH2Cl + HCl}`,
  },
  {
    from: "卤代烃",
    to: "烯烃",
    msg: "脱卤",
    equation: "H2CCH2Cl + NaOH ->[\\text{醇}][\\Delta] H2C=CH2 + NaCl",
  },
];
