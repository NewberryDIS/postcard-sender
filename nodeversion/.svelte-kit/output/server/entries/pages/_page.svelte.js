import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object, e as escape, g as getContext, v as validate_component, j as add_attribute, k as add_classes, m as missing_component, l as compute_slots, o as createEventDispatcher, b as subscribe } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
import "flatpickr";
import sgMail from "@sendgrid/mail";
Object.freeze({
  sm: 320,
  md: 672,
  lg: 1056,
  xlg: 1312,
  max: 1584
});
const ButtonSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "size"]);
  let { href = void 0 } = $$props;
  let { size = "default" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `
${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      { role: "button" },
      escape_object($$restProps)
    ],
    {
      classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
    }
  )}>${escape("")}</a>` : `<div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}></div>`}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasIconOnly;
  let buttonProps;
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { kind = "primary" } = $$props;
  let { size = "default" } = $$props;
  let { expressive = false } = $$props;
  let { isSelected = false } = $$props;
  let { icon = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { tooltipAlignment = "center" } = $$props;
  let { tooltipPosition = "bottom" } = $$props;
  let { as = false } = $$props;
  let { skeleton = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  let { tabindex = "0" } = $$props;
  let { type = "button" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("ComposedModal");
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.expressive === void 0 && $$bindings.expressive && expressive !== void 0)
    $$bindings.expressive(expressive);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.tooltipAlignment === void 0 && $$bindings.tooltipAlignment && tooltipAlignment !== void 0)
    $$bindings.tooltipAlignment(tooltipAlignment);
  if ($$props.tooltipPosition === void 0 && $$bindings.tooltipPosition && tooltipPosition !== void 0)
    $$bindings.tooltipPosition(tooltipPosition);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef(ref);
    }
  }
  hasIconOnly = icon && !$$slots.default;
  buttonProps = {
    type: href && !disabled ? void 0 : type,
    tabindex,
    disabled: disabled === true ? true : void 0,
    href,
    "aria-pressed": hasIconOnly && kind === "ghost" && !href ? isSelected : void 0,
    ...$$restProps,
    class: [
      "bx--btn",
      expressive && "bx--btn--expressive",
      (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
      size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
      size === "field" && "bx--btn--field",
      size === "small" && "bx--btn--sm",
      size === "lg" && "bx--btn--lg",
      size === "xl" && "bx--btn--xl",
      kind && `bx--btn--${kind}`,
      disabled && "bx--btn--disabled",
      hasIconOnly && "bx--btn--icon-only",
      hasIconOnly && "bx--tooltip__trigger",
      hasIconOnly && "bx--tooltip--a11y",
      hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
      hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
      hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
      $$restProps.class
    ].filter(Boolean).join(" ")
  };
  return `
${skeleton ? `${validate_component(ButtonSkeleton, "ButtonSkeleton").$$render($$result, Object.assign({ href }, { size }, $$restProps, { style: hasIconOnly && "width: 3rem;" }), {}, {})}` : `${as ? `${slots.default ? slots.default({ props: buttonProps }) : ``}` : `${href && !disabled ? `
  <a${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-hidden": "true",
      class: "bx--btn__icon",
      "aria-label": iconDescription
    },
    {},
    {}
  )}</a>` : `<button${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-hidden": "true",
      class: "bx--btn__icon",
      style: hasIconOnly ? "margin-left: 0" : void 0,
      "aria-label": iconDescription
    },
    {},
    {}
  )}</button>`}`}`}`;
});
const ButtonSet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["stacked"]);
  let { stacked = false } = $$props;
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--btn-set " + (stacked ? "bx--btn-set--stacked" : "")
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
const WarningFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"}"></path><path fill="${"none"}" d="${"M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>`;
});
const WarningAltFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="${"none"}" d="${"M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"}" data-icon-path="${"inner-path"}"></path><path d="${"M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"}"></path><path d="${"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"}"></path></svg>`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path></svg>`;
});
const modalsOpen = writable(0);
modalsOpen.subscribe((openCount) => {
  if (typeof document !== "undefined")
    document.body.classList.toggle("bx--body--with-modal-open", openCount > 0);
});
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let $$restProps = compute_rest_props($$props, [
    "as",
    "condensed",
    "narrow",
    "fullWidth",
    "noGutter",
    "noGutterLeft",
    "noGutterRight",
    "padding"
  ]);
  let { as = false } = $$props;
  let { condensed = false } = $$props;
  let { narrow = false } = $$props;
  let { fullWidth = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.condensed === void 0 && $$bindings.condensed && condensed !== void 0)
    $$bindings.condensed(condensed);
  if ($$props.narrow === void 0 && $$bindings.narrow && narrow !== void 0)
    $$bindings.narrow(narrow);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.noGutter === void 0 && $$bindings.noGutter && noGutter !== void 0)
    $$bindings.noGutter(noGutter);
  if ($$props.noGutterLeft === void 0 && $$bindings.noGutterLeft && noGutterLeft !== void 0)
    $$bindings.noGutterLeft(noGutterLeft);
  if ($$props.noGutterRight === void 0 && $$bindings.noGutterRight && noGutterRight !== void 0)
    $$bindings.noGutterRight(noGutterRight);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  props = {
    ...$$restProps,
    class: [
      $$restProps.class,
      "bx--grid",
      condensed && "bx--grid--condensed",
      narrow && "bx--grid--narrow",
      fullWidth && "bx--grid--full-width",
      noGutter && "bx--no-gutter",
      noGutterLeft && "bx--no-gutter--left",
      noGutterRight && "bx--no-gutter--right",
      padding && "bx--row-padding"
    ].filter(Boolean).join(" ")
  };
  return `${as ? `${slots.default ? slots.default({ props }) : ``}` : `<div${spread([escape_object(props)], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let $$restProps = compute_rest_props($$props, ["as", "condensed", "narrow", "noGutter", "noGutterLeft", "noGutterRight", "padding"]);
  let { as = false } = $$props;
  let { condensed = false } = $$props;
  let { narrow = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.condensed === void 0 && $$bindings.condensed && condensed !== void 0)
    $$bindings.condensed(condensed);
  if ($$props.narrow === void 0 && $$bindings.narrow && narrow !== void 0)
    $$bindings.narrow(narrow);
  if ($$props.noGutter === void 0 && $$bindings.noGutter && noGutter !== void 0)
    $$bindings.noGutter(noGutter);
  if ($$props.noGutterLeft === void 0 && $$bindings.noGutterLeft && noGutterLeft !== void 0)
    $$bindings.noGutterLeft(noGutterLeft);
  if ($$props.noGutterRight === void 0 && $$bindings.noGutterRight && noGutterRight !== void 0)
    $$bindings.noGutterRight(noGutterRight);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  props = {
    ...$$restProps,
    class: [
      $$restProps.class,
      "bx--row",
      condensed && "bx--row--condensed",
      narrow && "bx--row--narrow",
      noGutter && "bx--no-gutter",
      noGutterLeft && "bx--no-gutter--left",
      noGutterRight && "bx--no-gutter--right",
      padding && "bx--row-padding"
    ].filter(Boolean).join(" ")
  };
  return `${as ? `${slots.default ? slots.default({ props }) : ``}` : `<div${spread([escape_object(props)], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const Column = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columnClass;
  let props;
  let $$restProps = compute_rest_props($$props, [
    "as",
    "noGutter",
    "noGutterLeft",
    "noGutterRight",
    "padding",
    "aspectRatio",
    "sm",
    "md",
    "lg",
    "xlg",
    "max"
  ]);
  let { as = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  let { aspectRatio = void 0 } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xlg = void 0 } = $$props;
  let { max = void 0 } = $$props;
  const breakpoints = ["sm", "md", "lg", "xlg", "max"];
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.noGutter === void 0 && $$bindings.noGutter && noGutter !== void 0)
    $$bindings.noGutter(noGutter);
  if ($$props.noGutterLeft === void 0 && $$bindings.noGutterLeft && noGutterLeft !== void 0)
    $$bindings.noGutterLeft(noGutterLeft);
  if ($$props.noGutterRight === void 0 && $$bindings.noGutterRight && noGutterRight !== void 0)
    $$bindings.noGutterRight(noGutterRight);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xlg === void 0 && $$bindings.xlg && xlg !== void 0)
    $$bindings.xlg(xlg);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  columnClass = [sm, md, lg, xlg, max].map((breakpoint, i) => {
    const name = breakpoints[i];
    if (breakpoint === true) {
      return `bx--col-${name}`;
    } else if (typeof breakpoint === "number") {
      return `bx--col-${name}-${breakpoint}`;
    } else if (typeof breakpoint === "object") {
      let bp = [];
      if (typeof breakpoint.span === "number") {
        bp = [...bp, `bx--col-${name}-${breakpoint.span}`];
      } else if (breakpoint.span === true) {
        bp = [...bp, `bx--col-${name}`];
      }
      if (typeof breakpoint.offset === "number") {
        bp = [...bp, `bx--offset-${name}-${breakpoint.offset}`];
      }
      return bp.join(" ");
    }
  }).filter(Boolean).join(" ");
  props = {
    ...$$restProps,
    class: [
      $$restProps.class,
      columnClass,
      !columnClass && "bx--col",
      noGutter && "bx--no-gutter",
      noGutterLeft && "bx--no-gutter--left",
      noGutterRight && "bx--no-gutter--right",
      aspectRatio && `bx--aspect-ratio bx--aspect-ratio--${aspectRatio}`,
      padding && "bx--col-padding"
    ].filter(Boolean).join(" ")
  };
  return `${as ? `${slots.default ? slots.default({ props }) : ``}` : `<div${spread([escape_object(props)], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const EditOff = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M30 28.6L3.4 2 2 3.4l10.1 10.1L4 21.6V28h6.4l8.1-8.1L28.6 30 30 28.6zM9.6 26H6v-3.6l7.5-7.5 3.6 3.6L9.6 26zM29.4 6.2L29.4 6.2l-3.6-3.6c-.8-.8-2-.8-2.8 0l0 0 0 0-8 8 1.4 1.4L20 8.4l3.6 3.6L20 15.6l1.4 1.4 8-8C30.2 8.2 30.2 7 29.4 6.2L29.4 6.2zM25 10.6L21.4 7l3-3L28 7.6 25 10.6z"}"></path></svg>`;
});
const TextArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorId;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "placeholder",
    "cols",
    "rows",
    "maxCount",
    "light",
    "disabled",
    "readonly",
    "helperText",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "id",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { cols = 50 } = $$props;
  let { rows = 4 } = $$props;
  let { maxCount = void 0 } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { readonly = false } = $$props;
  let { helperText = "" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.maxCount === void 0 && $$bindings.maxCount && maxCount !== void 0)
    $$bindings.maxCount(maxCount);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  errorId = `error-${id}`;
  return `
<div${add_classes("bx--form-item".trim())}>${(labelText || $$slots.labelText) && !hideLabel ? `<div${add_classes("bx--text-area__label-wrapper".trim())}><label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
          ${escape(labelText)}
        `}</label>
      ${maxCount ? `<div${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "")).trim())}>${escape(value.length)}/${escape(maxCount)}</div>` : ``}</div>` : ``}
  <div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--text-area__wrapper".trim())}>${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--text-area__invalid-icon" }, {}, {})}` : ``}
    <textarea${spread(
    [
      {
        "aria-invalid": escape_attribute_value(invalid || void 0)
      },
      {
        "aria-describedby": escape_attribute_value(invalid ? errorId : void 0)
      },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      { cols: escape_attribute_value(cols) },
      { rows: escape_attribute_value(rows) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { readonly: readonly || null },
      {
        maxlength: escape_attribute_value(maxCount ?? void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--text-area " + (light ? "bx--text-area--light" : "") + " " + (invalid ? "bx--text-area--invalid" : "")
    }
  )}${add_attribute("this", ref, 0)}>${value || ""}</textarea></div>
  ${!invalid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}
  ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}</div>`;
});
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isFluid;
  let errorId;
  let warnId;
  let $$restProps = compute_rest_props($$props, [
    "size",
    "value",
    "placeholder",
    "light",
    "disabled",
    "helperText",
    "id",
    "name",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "ref",
    "required",
    "inline",
    "readonly"
  ]);
  let $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { helperText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  let { inline = false } = $$props;
  let { readonly = false } = $$props;
  const ctx = getContext("Form");
  createEventDispatcher();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  isFluid = !!ctx && ctx.isFluid;
  errorId = `error-${id}`;
  warnId = `warn-${id}`;
  return `
<div${add_classes(("bx--form-item bx--text-input-wrapper " + (inline ? "bx--text-input-wrapper--inline" : "") + " " + (light ? "bx--text-input-wrapper--light" : "") + " " + (readonly ? "bx--text-input-wrapper--readonly" : "")).trim())}>${inline ? `<div${add_classes("bx--text-input__label-helper-wrapper".trim())}>${labelText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "") + " " + (size === "sm" ? "bx--label--inline--sm" : "") + " " + (size === "xl" ? "bx--label--inline--xl" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
            ${escape(labelText)}
          `}</label>` : ``}
      ${!isFluid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>` : ``}
  ${!inline && (labelText || $$slots.labelText) ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "") + " " + (inline && size === "sm" ? "bx--label--inline-sm" : "") + " " + (inline && size === "xl" ? "bx--label--inline-xl" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
        ${escape(labelText)}
      `}</label>` : ``}
  <div${add_classes(("bx--text-input__field-outer-wrapper " + (inline ? "bx--text-input__field-outer-wrapper--inline" : "")).trim())}><div${add_attribute("data-invalid", invalid || void 0, 0)}${add_attribute("data-warn", warn || void 0, 0)}${add_classes(("bx--text-input__field-wrapper " + (!invalid && warn ? "bx--text-input__field-wrapper--warning" : "")).trim())}>${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--text-input__invalid-icon" }, {}, {})}` : ``}
      ${!invalid && warn ? `${validate_component(WarningAltFilled, "WarningAltFilled").$$render(
    $$result,
    {
      class: "bx--text-input__invalid-icon\n            bx--text-input__invalid-icon--warning"
    },
    {},
    {}
  )}` : ``}
      ${readonly ? `${validate_component(EditOff, "EditOff").$$render($$result, { class: "bx--text-input__readonly-icon" }, {}, {})}` : ``}
      <input${spread(
    [
      {
        "data-invalid": escape_attribute_value(invalid || void 0)
      },
      {
        "aria-invalid": escape_attribute_value(invalid || void 0)
      },
      {
        "data-warn": escape_attribute_value(warn || void 0)
      },
      {
        "aria-describedby": escape_attribute_value(invalid ? errorId : warn ? warnId : void 0)
      },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { required: required || null },
      { readonly: readonly || null },
      escape_object($$restProps)
    ],
    {
      classes: "bx--text-input " + (light ? "bx--text-input--light" : "") + " " + (invalid ? "bx--text-input--invalid" : "") + " " + (warn ? "bx--text-input--warn" : "") + " " + (size === "sm" ? "bx--text-input--sm" : "") + " " + (size === "xl" ? "bx--text-input--xl" : "")
    }
  )}${add_attribute("this", ref, 0)}${add_attribute("value", value, 0)}>
      ${isFluid ? `<hr${add_classes("bx--text-input__divider".trim())}>` : ``}
      ${isFluid && !inline && invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
      ${isFluid && !inline && warn ? `<div${add_attribute("id", warnId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}</div>
    ${!invalid && !warn && !isFluid && !inline && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${escape(helperText)}</div>` : ``}
    ${!isFluid && invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
    ${!isFluid && !invalid && warn ? `<div${add_attribute("id", warnId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}</div></div>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"}"></path></svg>`;
});
const shouldRenderHamburgerMenu = writable(false);
const isSideNavCollapsed = writable(false);
const isSideNavRail = writable(false);
const HamburgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ariaLabel", "isOpen", "iconMenu", "iconClose", "ref"]);
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { iconMenu = Menu } = $$props;
  let { iconClose = Close } = $$props;
  let { ref = null } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<button${spread(
    [
      { type: "button" },
      { title: escape_attribute_value(ariaLabel) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--header__action bx--header__menu-trigger bx--header__menu-toggle"
    }
  )}${add_attribute("this", ref, 0)}>${validate_component((isOpen ? iconClose : iconMenu) || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})}</button>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, [
    "expandedByDefault",
    "isSideNavOpen",
    "uiShellAriaLabel",
    "href",
    "company",
    "platformName",
    "persistentHamburgerMenu",
    "expansionBreakpoint",
    "ref",
    "iconMenu",
    "iconClose"
  ]);
  let $shouldRenderHamburgerMenu, $$unsubscribe_shouldRenderHamburgerMenu;
  $$unsubscribe_shouldRenderHamburgerMenu = subscribe(shouldRenderHamburgerMenu, (value) => $shouldRenderHamburgerMenu = value);
  let { expandedByDefault = true } = $$props;
  let { isSideNavOpen = false } = $$props;
  let { uiShellAriaLabel = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { company = void 0 } = $$props;
  let { platformName = "" } = $$props;
  let { persistentHamburgerMenu = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  let { ref = null } = $$props;
  let { iconMenu = Menu } = $$props;
  let { iconClose = Close } = $$props;
  let winWidth = void 0;
  if ($$props.expandedByDefault === void 0 && $$bindings.expandedByDefault && expandedByDefault !== void 0)
    $$bindings.expandedByDefault(expandedByDefault);
  if ($$props.isSideNavOpen === void 0 && $$bindings.isSideNavOpen && isSideNavOpen !== void 0)
    $$bindings.isSideNavOpen(isSideNavOpen);
  if ($$props.uiShellAriaLabel === void 0 && $$bindings.uiShellAriaLabel && uiShellAriaLabel !== void 0)
    $$bindings.uiShellAriaLabel(uiShellAriaLabel);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.platformName === void 0 && $$bindings.platformName && platformName !== void 0)
    $$bindings.platformName(platformName);
  if ($$props.persistentHamburgerMenu === void 0 && $$bindings.persistentHamburgerMenu && persistentHamburgerMenu !== void 0)
    $$bindings.persistentHamburgerMenu(persistentHamburgerMenu);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isSideNavOpen = expandedByDefault && winWidth >= expansionBreakpoint && !persistentHamburgerMenu;
    ariaLabel = company ? `${company} ` : "" + (uiShellAriaLabel || $$props["aria-label"] || platformName);
    $$rendered = `

<header${add_attribute("aria-label", ariaLabel, 0)}${add_classes("bx--header".trim())}>${slots["skip-to-content"] ? slots["skip-to-content"]({}) : ``}
  ${$shouldRenderHamburgerMenu && winWidth < expansionBreakpoint || persistentHamburgerMenu ? `${validate_component(HamburgerMenu, "HamburgerMenu").$$render(
      $$result,
      {
        iconClose,
        iconMenu,
        isOpen: isSideNavOpen
      },
      {
        isOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}
  <a${spread([{ href: escape_attribute_value(href) }, escape_object($$restProps)], { classes: "bx--header__name" })}${add_attribute("this", ref, 0)}>${company ? `<span${add_classes("bx--header__name--prefix".trim())}>${escape(company)}\xA0</span>` : ``}
    ${slots.platform ? slots.platform({}) : `${escape(platformName)}`}</a>
  ${slots.default ? slots.default({}) : ``}</header>`;
  } while (!$$settled);
  $$unsubscribe_shouldRenderHamburgerMenu();
  return $$rendered;
});
const HeaderAction_svelte_svelte_type_style_lang = "";
const HeaderActionLink_svelte_svelte_type_style_lang = "";
const HeaderPanelDivider_svelte_svelte_type_style_lang = "";
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let unsetLeftMargin;
  let $$restProps = compute_rest_props($$props, ["id"]);
  let $isSideNavRail, $$unsubscribe_isSideNavRail;
  let $isSideNavCollapsed, $$unsubscribe_isSideNavCollapsed;
  $$unsubscribe_isSideNavRail = subscribe(isSideNavRail, (value) => $isSideNavRail = value);
  $$unsubscribe_isSideNavCollapsed = subscribe(isSideNavCollapsed, (value) => $isSideNavCollapsed = value);
  let { id = "main-content" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  unsetLeftMargin = $isSideNavCollapsed && !$isSideNavRail;
  $$unsubscribe_isSideNavRail();
  $$unsubscribe_isSideNavCollapsed();
  return `<main${spread(
    [
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        style: escape(unsetLeftMargin ? "margin-left: 0;" : "", true) + " " + escape($$restProps.style, true)
      }
    ],
    { classes: "bx--content" }
  )}>${slots.default ? slots.default({}) : ``}</main>`;
});
const SkipToContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "tabindex"]);
  let { href = "#main-content" } = $$props;
  let { tabindex = "0" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        tabindex: escape_attribute_value(tabindex)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--skip-to-content"
    }
  )}>${slots.default ? slots.default({}) : `Skip to main content`}</a>`;
});
const HeaderSearch_svelte_svelte_type_style_lang = "";
const all = "";
const fonts = "";
const globals = "";
const overrides = "";
const Nogo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svg.svelte-yfwai1{padding-left:20px}",
  map: null
};
const Nogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<svg version="${"1.1"}" id="${"svg96"}" width="${"275"}" height="${"55"}" viewBox="${"0 0 275 55"}" class="${"svelte-yfwai1"}"><path${add_attribute("style", `fill:#4051a3;stroke-width:0.444444`, 0)} d="${"M 0,34.509067 V 13.462578 L 9.8888888,7.8812455 19.777778,2.2999131 20,5.359409 l 0.222222,3.0594961 6.959745,-4.2211792 6.959744,-4.221179 9.4847,6.1470333 9.4847,6.1470328 0.116271,17.42025 0.116267,17.420249 2.5504,0.0089 2.550395,0.0089 L 54,51.321788 l -4.444445,4.192809 -8.111111,0.02044 -8.111111,0.02052 V 34.031574 12.507591 L 29.95371,10.401164 C 26.632228,8.3309753 26.553856,8.3075807 25.398154,9.0412945 24.751391,9.4519011 23.272426,10.335585 22.111563,11.005037 L 20.000903,12.222223 20.000452,33.88889 20,55.555557 H 10 0 Z M 76.444444,30.692222 V 24.000001 H 73.555555 70.666666 V 22.211728 20.423455 L 78.333333,20.545061 86,20.666667 l 0.137942,1.666667 0.137938,1.666667 h -2.903836 -2.903835 l -0.122996,6.555555 -0.122991,6.555556 -1.888889,0.136666 -1.888889,0.136666 z m 12.197369,6.069943 c -0.120547,-0.314144 -0.164271,-4.064144 -0.09716,-8.333334 l 0.122017,-7.762164 1.86892,-0.13569 1.868925,-0.13569 0.131075,3.246801 0.13108,3.246802 3.444445,0.129806 3.444444,0.129806 v -3.352028 -3.352029 h 2.000001 2 v 8.444445 8.444444 h -2 -2.000001 V 34.000001 30.666667 H 96 92.444444 v 3.333334 3.333333 H 90.65272 c -1.049511,0 -1.882525,-0.236605 -2.010907,-0.571169 z M 107.55556,28.88889 V 20.444445 H 114 h 6.44444 v 1.777778 1.777778 H 116 111.55556 v 1.555555 1.555556 h 3.33333 3.33333 v 1.777778 1.777777 h -3.33333 -3.33333 v 1.555556 1.555556 h 4.88888 4.88889 v 1.777777 1.777778 h -6.88889 -6.88888 z m 22.66666,0.02556 v -8.47 h 2.21228 2.21229 l 3.23216,4.777778 3.23216,4.777778 0.12615,-4.777778 0.12614,-4.777778 h 1.76275 1.76274 v 8.444445 8.444444 h -1.51298 c -1.42948,0 -1.723,-0.298323 -5.3186,-5.405609 l -3.80563,-5.40561 -0.12584,5.294499 -0.12584,5.294498 -1.88889,0.136666 -1.88889,0.136666 v -8.47 z m 19.11111,-0.02618 v -8.46823 l 6.33334,0.123313 L 162,20.666668 v 1.555555 1.555556 l -4.33333,0.127205 -4.33334,0.127206 v 1.539461 1.539461 h 3.11111 3.11111 v 1.777778 1.777778 h -3.11111 -3.11111 v 1.555556 1.555555 h 4.91572 4.91572 l -0.13794,1.666667 -0.13794,1.666666 -6.77778,0.122687 -6.77778,0.122687 v -8.468223 z m 19.76855,7.889516 c -0.37474,-1.022746 -4.65744,-15.838406 -4.65744,-16.112039 0,-0.148499 0.93601,-0.20904 2.08001,-0.134535 l 2.08002,0.135462 1.40396,5.111111 c 0.92502,3.367535 1.49332,4.807881 1.66588,4.222223 0.14406,-0.488889 0.80641,-2.848916 1.47191,-5.244504 l 1.20998,-4.355615 1.78735,0.133393 c 1.98883,0.148427 1.76701,-0.252402 3.88612,7.022281 l 0.971,3.333334 1.38855,-5.111112 1.38856,-5.111111 1.90395,-0.137402 c 1.79384,-0.129455 1.8889,-0.07804 1.64355,0.888889 -0.14322,0.56446 -1.2,4.326291 -2.3484,8.359625 l -2.08799,7.333333 -1.86232,0.135368 -1.86232,0.135367 -1.38481,-4.579812 c -0.76165,-2.518897 -1.49624,-4.879812 -1.63243,-5.246479 -0.1421,-0.382568 -0.58132,0.469727 -1.03068,2 -2.54402,8.663419 -2.08277,7.777778 -4.0507,7.777778 -1.0033,0 -1.84773,-0.238894 -1.96375,-0.555555 z m 21.12034,-7.844256 v -8.489078 l 5,7.11e-4 c 5.64362,8e-4 7.68309,0.65565 8.698,2.792914 0.72222,1.520915 0.32151,3.653344 -0.8393,4.466405 -0.82416,0.577263 -0.8178,0.623465 0.21981,1.598255 1.37317,1.290019 1.75224,2.853435 1.14096,4.705637 -0.84932,2.573461 -2.15633,3.070541 -8.5528,3.252794 l -5.66667,0.161439 z m 10.13358,3.47288 c 0.19742,-1.698297 -0.79334,-2.250285 -3.76275,-2.096367 L 194,30.444445 l -0.13913,1.686703 -0.13914,1.686704 3.25025,-0.131148 c 3.1254,-0.12611 3.25537,-0.175288 3.38382,-1.280301 z m -0.61065,-5.992823 c 0.5246,-0.524594 0.58438,-0.908958 0.24114,-1.550307 -0.54867,-1.025201 -1.91219,-1.418948 -4.25088,-1.227533 -1.42645,0.116751 -1.76145,0.325825 -1.88167,1.174361 -0.27253,1.923562 0.1814,2.301011 2.76723,2.301011 1.61215,0 2.66077,-0.234125 3.12418,-0.697532 z M 208,28.88889 v -8.444445 h 6.44444 6.44445 v 1.777778 1.777778 H 216.44444 212 v 1.555555 1.555556 h 3.33333 3.33334 v 1.777778 1.777777 H 215.33333 212 v 1.555556 1.555556 h 4.88889 4.88889 v 1.777777 1.777778 H 214.88889 208 Z m 16.88889,0 v -8.444445 l 4.55555,0.0025 c 7.12416,0.0039 9.06861,0.888309 9.53093,4.335138 0.27439,2.04571 -0.7302,4.343027 -2.08753,4.773828 -0.85071,0.270005 -0.78853,0.489469 1.14223,4.031497 l 2.04192,3.745937 -2.14711,-0.01031 -2.1471,-0.0103 -2,-3.43414 c -1.8913,-3.247482 -2.08455,-3.43414 -3.55556,-3.43414 h -1.55555 l -0.12981,3.444445 -0.12981,3.444444 h -1.75908 -1.75908 z m 9.79298,-2.695077 c 0.82965,-1.550217 -0.16867,-2.193812 -3.40296,-2.193812 -2.81606,0 -2.83447,0.0082 -2.83447,1.259259 0,0.692593 0.13334,1.392593 0.2963,1.555555 0.16296,0.162963 1.45593,0.296297 2.87325,0.296297 2.14869,0 2.65854,-0.152446 3.06788,-0.917299 z m 7.9848,2.695077 v -8.444445 h 4.90316 c 7.32222,0 9.27873,1.058517 9.30492,5.034188 0.0119,1.803964 -0.19926,2.358701 -1.32709,3.486532 l -1.34124,1.341232 1.78568,3.23485 c 0.98212,1.779168 1.78568,3.360229 1.78568,3.513469 0,0.15324 -0.89463,0.278618 -1.98806,0.278618 h -1.98805 l -2.05085,-3.555555 c -1.9318,-3.349171 -2.13887,-3.555556 -3.5675,-3.555556 h -1.51665 v 3.555556 3.555555 h -2 -2 z m 9.92801,-2.740524 c 0.84512,-1.346204 -0.39293,-2.148365 -3.31577,-2.148365 h -2.61224 v 1.576763 1.576763 l 2.73156,-0.132319 c 1.96283,-0.09508 2.8624,-0.340722 3.19645,-0.872842 z m 12.14606,10.888672 c -0.16296,-0.162963 -0.2963,-1.771995 -0.2963,-3.575627 0,-3.178107 -0.066,-3.378172 -2.13848,-6.481481 -1.17617,-1.761184 -2.59248,-3.952152 -3.14736,-4.868818 l -1.00888,-1.666667 h 2.47382 2.47381 l 1.83775,2.909871 c 1.01076,1.600429 1.90961,2.838013 1.99743,2.750187 0.0878,-0.08783 0.95958,-1.397268 1.93722,-2.909871 1.74708,-2.703082 1.81195,-2.750187 3.78722,-2.750187 1.10534,0 2.0097,0.154064 2.0097,0.342365 0,0.188302 -1.3,2.434237 -2.88889,4.990968 l -2.88889,4.648603 v 3.453477 3.453476 h -1.92593 c -1.05926,0 -2.05926,-0.133333 -2.22222,-0.296296 z"}" id="${"path231"}"></path></svg>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "h1.svelte-quvog0,.subtext.svelte-quvog0{color:#4051a3;padding-left:70px}h1.svelte-quvog0{font-family:'Flecha M Medium';line-height:30px}.subtext.svelte-quvog0{font-size:20px !important;line-height:18px}.page-title.svelte-quvog0{display:flex;flex-direction:column;justify-content:center}",
  map: null
};
const Header_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    "skip-to-content": () => {
      return `${validate_component(SkipToContent, "SkipToContent").$$render($$result, {}, {}, {})}
  `;
    },
    default: () => {
      return `<a href="${"https://newberry.org"}">${validate_component(Nogo, "Nogo").$$render($$result, {}, {}, {})}</a>
  <div class="${"page-title svelte-quvog0"}"><h1 class="${"svelte-quvog0"}">Postcard Sender</h1>
    <h3 class="${"subtext svelte-quvog0"}">Send a postcard to a friend!</h3></div>`;
    }
  })}`;
});
const InputFields_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".buttons.svelte-zyjv9s,.fromemail.svelte-zyjv9s,.toemail.svelte-zyjv9s{margin:10px auto}.buttons.svelte-zyjv9s{text-align:center}.postcard-coverer.svelte-zyjv9s{position:absolute;right:0;bottom:10%;left:0;padding:10px}",
  map: null
};
const InputFields = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let message, fromemail, toemail;
  let sendMessage = "Send Email!";
  console.log({ "VITE_SENDGRID_API_KEY": "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", "VITE_ok": "vite ok", "VITE_MY_VAR": "vite my var", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true });
  sgMail.setApiKey("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");
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"postcard-coverer svelte-zyjv9s"}">${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"message"}">${validate_component(TextArea, "TextArea").$$render(
                  $$result,
                  {
                    hidelabel: true,
                    placeholder: true,
                    rows: 7,
                    value: message
                  },
                  {
                    value: ($$value) => {
                      message = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div>`;
              }
            })}
            ${validate_component(Column, "Column").$$render($$result, {}, {}, {})}`;
          }
        })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"fromemail svelte-zyjv9s"}">${validate_component(TextInput, "TextInput").$$render(
                  $$result,
                  {
                    hidelabel: true,
                    placeholder: "Your E-Mail...",
                    value: fromemail
                  },
                  {
                    value: ($$value) => {
                      fromemail = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div>`;
              }
            })}
            ${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"toemail svelte-zyjv9s"}">${validate_component(TextInput, "TextInput").$$render(
                  $$result,
                  {
                    hidelabel: true,
                    placeholder: "Recipient's E-Mail...",
                    value: toemail
                  },
                  {
                    value: ($$value) => {
                      toemail = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div>`;
              }
            })}`;
          }
        })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, { sm: { span: 4, offset: 0 } }, {}, {
              default: () => {
                return `<div class="${"buttons svelte-zyjv9s"}">${validate_component(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
                  default: () => {
                    return `${escape(sendMessage)}`;
                  }
                })}</div>`;
              }
            })}`;
          }
        })}`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Background_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".bg-image.svelte-ti00ao{position:fixed;top:0;left:0;bottom:0;right:0;width:100vw;height:100vh;overflow:hidden;mix-blend-mode:screen;filter:grayscale(100%) contrast(200%);opacity:0.5;object-fit:cover}",
  map: null
};
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const bgArray = [
    ["nby_1BH1504", "1"],
    ["nby_1BH2115", "1"],
    ["nby_1BH2128", "1"],
    ["nby_VO184", "1"]
  ];
  const bgImage = bgArray[Math.floor(Math.random() * 4)];
  $$result.css.add(css$1);
  return `<img${add_attribute("src", `https://iiif.archivelab.org/iiif/${bgImage[0]}$${bgImage[1]}/full/1000,/0/default.jpg`, 0)} alt="${""}" class="${"bg-image svelte-ti00ao"}">`;
});
const halloween = [
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZ1G4S/full/1000,/0/default.jpg", "l"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZ1M7V/full/1000,/0/default.jpg", "l"]],
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZ1RNA/full/1000,/0/default.jpg", "l"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZ1QMF/full/1000,/0/default.jpg", "l"]],
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZ1X30/full/1000,/0/default.jpg", "l"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZ1SO6/full/1000,/0/default.jpg", "l"]],
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZ1OGM/full/1000,/0/default.jpg", "p"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZ1FWE/full/1000,/0/default.jpg", "l"]],
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZEN63/full/1000,/0/default.jpg", "p"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZ12LG/full/1000,/0/default.jpg", "l"]],
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZEMAV/full/1000,/0/default.jpg", "l"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZEU4L/full/1000,/0/default.jpg", "l"]],
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZEIBJ/full/1000,/0/default.jpg", "l"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZE8Q0/full/1000,/0/default.jpg", "l"]],
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZEW7C/full/1000,/0/default.jpg", "p"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZERUA/full/1000,/0/default.jpg", "l"]],
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZEAC3/full/1000,/0/default.jpg", "p"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZE5OJ/full/1000,/0/default.jpg", "l"]],
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZE4IG/full/1000,/0/default.jpg", "p"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZES36/full/1000,/0/default.jpg", "l"]],
  [["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZE9RF/full/1000,/0/default.jpg", "p"], ["https://collections.newberry.org/IIIF3/Image/2KXJ8ZPZE0JH/full/1000,/0/default.jpg", "l"]]
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media only screen and (max-width: 1200){}.footer-links.svelte-11a4uyq{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:auto;margin-top:15px}.buttons.svelte-11a4uyq{margin:auto;display:flex;justify-content:center}.wrapper.svelte-11a4uyq{position:relative;margin:auto;width:70%}.backwrapper.svelte-11a4uyq{position:relative}main.svelte-11a4uyq{position:absolute;mix-blend-mode:normal;width:100%}.postcard-display.svelte-11a4uyq{display:flex;flex-direction:column;align-items:center}.frontwrapper.svelte-11a4uyq,.backwrapper.svelte-11a4uyq{flex:1;max-height:calc(100vh - 130px);object-fit:contain;padding:10px;margin-top:15px}.postcard-front.svelte-11a4uyq{max-height:calc(100vh - 130px)}.postcard-back.svelte-11a4uyq{max-width:fit-content}.postcard-front.svelte-11a4uyq,.postcard-back.svelte-11a4uyq{object-fit:contain;max-width:100%}.postcard-front.svelte-11a4uyq,.postcard-back.svelte-11a4uyq{padding:10px;border-radius:5px;background:#eaebe7;box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px}",
  map: null
};
let holiday = "Halloween";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let randomPostcard;
  const randomIndex = Math.round(Math.random() * halloween.length) - 1;
  $$result.css.add(css);
  randomPostcard = halloween[randomIndex];
  return `${validate_component(Background, "Background").$$render($$result, {}, {}, {})}
${validate_component(Header_1, "Header").$$render($$result, {}, {}, {})}


${validate_component(Content, "Content").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"wrapper svelte-11a4uyq"}"><main class="${"svelte-11a4uyq"}"><div class="${"postcard-display svelte-11a4uyq"}"><div class="${"frontwrapper svelte-11a4uyq"}"><img${add_attribute("src", randomPostcard[0][0], 0)} class="${"postcard-front svelte-11a4uyq"}" alt="${""}"></div>
                            <div class="${"backwrapper svelte-11a4uyq"}"><img${add_attribute("src", randomPostcard[1][0], 0)} class="${"postcard-back svelte-11a4uyq"}" alt="${""}">
                                ${validate_component(InputFields, "InputFields").$$render($$result, {}, {}, {})}</div></div>
                        <div class="${"buttons svelte-11a4uyq"}">${validate_component(Button, "Button").$$render($$result, { kind: "secondary", href: "/" }, {}, {
                    default: () => {
                      return `Random ${escape(holiday)} Postcard`;
                    }
                  })}</div>
                        <div class="${"footer-links svelte-11a4uyq"}">${validate_component(ButtonSet, "ButtonSet").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, { kind: "secondary", href: "diginewb" }, {}, {
                        default: () => {
                          return `digital newberry
                                `;
                        }
                      })}
                                ${validate_component(Button, "Button").$$render($$result, { kind: "secondary", href: ".org" }, {}, {
                        default: () => {
                          return `Newberry Library
                                `;
                        }
                      })}
                                ${validate_component(Button, "Button").$$render($$result, { kind: "secondary", href: "postcardcoll" }, {}, {
                        default: () => {
                          return `postcard collection
                                `;
                        }
                      })}
                                ${validate_component(Button, "Button").$$render($$result, { kind: "secondary", href: "collections" }, {}, {
                        default: () => {
                          return `cortex
                                `;
                        }
                      })}`;
                    }
                  })}</div></main></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
