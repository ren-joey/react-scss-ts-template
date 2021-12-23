module.exports = {
    extends: ["stylelint-config-standard"],
    plugins: ["stylelint-scss", "stylelint-order"],
    rules: {
        "max-nesting-depth": null,
        "no-empty-source": null,
        "no-descending-specificity": null,
        "selector-class-pattern": null,
        "selector-pseudo-element-no-unknown": null,
        "property-no-vendor-prefix": null,
        "selector-max-compound-selectors": null,
        "value-no-vendor-prefix": null,
        "font-family-no-missing-generic-family-keyword": null,
        "declaration-block-semicolon-newline-after": null,
        indentation: [4, { severity: "warning" }],
        "declaration-block-trailing-semicolon": null,
        "selector-no-qualifying-type": null,
        "keyframes-name-pattern": null,

        "scss/at-import-partial-extension-blacklist": null,

        "order/properties-alphabetical-order": null,
        "order/properties-order": [
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "display",
            "align-items",
            "justify-content",
            "float",
            "clear",
            "overflow",
            "overflow-x",
            "overflow-y",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "font-size",
            "font-family",
            "font-weight",
            "text-align",
            "text-justify",
            "text-indent",
            "text-overflow",
            "text-decoration",
            "white-space",
            "line-height",
            "color",
            "background",
            "background-position",
            "background-repeat",
            "background-size",
            "background-color",
            "background-clip",
            "border",
            "border-style",
            "border-width",
            "border-color",
            "border-top",
            "border-top-style",
            "border-top-width",
            "border-top-color",
            "border-right",
            "border-right-style",
            "border-right-width",
            "border-right-color",
            "border-bottom",
            "border-bottom-style",
            "border-bottom-width",
            "border-bottom-color",
            "border-left",
            "border-left-style",
            "border-left-width",
            "border-left-color",
            "border-radius",
            "opacity",
            "filter",
            "list-style",
            "outline",
            "visibility",
            "z-index",
            "box-shadow",
            "text-shadow",
            "resize",
            "transition",
            "cursor",
        ],
    }
};
