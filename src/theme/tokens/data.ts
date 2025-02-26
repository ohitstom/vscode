import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "JSON/YAML keys, other left-hand assignments",
      scope: [
        "keyword.other.definition.ini",
        "punctuation.support.type.property-name.json",
        "support.type.property-name.json",
        "punctuation.support.type.property-name.toml",
        "support.type.property-name.toml",
        "entity.name.tag.yaml",
        "punctuation.support.type.property-name.yaml",
        "support.type.property-name.yaml",
        "entity.name.section.group-title.ini",
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      name: "JSON/YAML constants",
      scope: ["constant.language.json", "constant.language.yaml"],
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      name: "YAML anchors",
      scope: ["entity.name.type.anchor.yaml", "variable.other.alias.yaml"],
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "TOML tables",
      scope: "support.type.property-name.table",
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "TOML dates",
      scope: "constant.other.time.datetime.offset.toml",
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
    {
      name: "YAML anchor puctuation",
      scope: [
        "punctuation.definition.anchor.yaml",
        "punctuation.definition.alias.yaml",
      ],
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
    {
      name: "YAML triple dashes",
      scope: "entity.other.document.begin.yaml",
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
