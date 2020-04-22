# Callisto

 [![Dependency Status](https://dependencyci.com/github/Daylon/callisto/badge)](https://dependencyci.com/github/Daylon/callisto)

Lo-fat Design System

----

_**Disclaimer:** this is an early version that wouldn't be suitable for production (at least, I would consider the risks) but feel free to tinker around with it. You'll probably notice inconsistencies and todos all over the place. Feedback would be welcomed, obviously_

> "Yeup, but I'd want to use it anyway!"

[Okay, then](https://github.com/daylon/callisto#usage).

----

### Rationale

While design systems are everywhere under multiple disguises, failed attempts and half-baked guidelines, some have managed the feat to be usable and easy-to-use… Somewhat. _As a designer_, I've been for a long time resticent to such documentations/scaffoldings for two simple reasons:

- Building a design system is time-consuming;
- A design system rarely stand the test of time;

We tend to always hear about designers from _agencies_, _third parties_ and _design studios_ but not from the field —Because _there are_ designers working close to the metal, directly as entreprises employees, large or SMB's, and these teams tend to be small, with way less firepower or strategic capability. For those designers, building and maintaining a design system is _hard_.

##### Why now?

Browsers capabilities have evolved to offer a wide range of tools and shorthands; new features are developped in a future-proof mindset (_e.g._ [from now on, no more vendor prefixes!](https://webkit.org/blog/6131/updating-our-prefixing-policy/)). It's easier to set up a layout without much compromising on visual aspect —At least, fallback tend to be elegant and, if you're ready to accept that _some_ of your UI may not make it as is onto your end-user screen, you're capable of supporting a full range of setups.

##### WHY NOW?

I needed some handy library for a handful of personal projects of mine and wanted to build upon a common set of conventions —mainly typography-related-stuff— and I wasn't satisfied by what I could find (see below). Cutting the cost of building one of my own by the amount of projects seemed fair. _It is_, actually. And I didn't want (okay, maybe surprisingly) any grid system at all; just sensible layout.

##### Main features/objectives

- Low css footprint;
- Antifragile typographic system;
- Context aware layout and color palette;

Could be cited projects that tries either to facilitate typography or serve a full-fledged design system, like [LightningDesign System](https://www.lightningdesignsystem.com) from Salesforce, [Foundation](http://foundation.zurb.com/), [Pure](http://purecss.io/), typesetting libraries like [Megatype](https://github.com/StudioThick/megatype) or [SassLine](https://sassline.com/), clever preprocessors like [Typeset](https://blot.im/typeset/) or the ever expanding, gigantic omniscious pastafarian creature, [Bootstrap](https://getbootstrap.com/).

If the subject matters to you, take a moment to read these articles as weel:
- on [GE's Predix Design System](https://medium.com/ge-design/ges-predix-design-system-8236d47b0891#.qhoijh3wp);
- [Universal Typography](http://universaltypography.com/);

### Installation

```sh
git clone https://github.com/Daylon/callisto.git
npm install
```

### Usage

#### Key concepts
- Font-size in root;
- Typesetting use a standardized font-scaling factor;

#### fontsize, :root
The font-size in pixels is set once and for all on the `:root`element.
Everything (I mean _everything_) after this rule should only use **root em** units.
The UI's default font-size is set to **16px** for screens and **12pt** for print.

**Override:**
```scss
$font-size-default: 16px;
$font-size-default--print: 12pt;
```

#### Font scaling
By default, Callisto use a [minor third](http://www.modularscale.com/?1&em&1.2&web&text). Feel free to override this one as well.

**Override:**
```scss
$font-scale: 6/5;
```

#### Font-size: min, max

Callisto typeset is bound between two values:
- A minimum unitless threshold that should be read as root em;
- A maximm _scale_ used with _font-scale_ to defined its maximum.

**Override:**
```scss
$font-size-min-threshold: .3; // i.e. 0.3rem
$font-max-scale: 4;
```

Ready-made variables will be exposed based on these values:
```scss
.some-element {
  font-size: $font-size-min;
  font-size: $font-size-regular;
  font-size: $font-size-max;
}

```

#### Prefixing

Fancy that! Emojis!
```html
<header class="⭐-header"></header>
```
There's actually a simple rationale: I wanted to be able to easily tell apart Callisto from the project's actual code. You can override this as well:

```scss
$callisto: "⭐";
```


### Examples

```scss
$font-size-min-threshold: .8;
$font-max-scale: 4;
@import "./normalize"; // not included in Callisto but recommended
@import "./callisto/design/index";
```
If you choose to also use Normalize, don't forget to post process your css to remove redundancies.

_[todo]_

### Utilities

#### For typesetting

```scss
.any-element {
  font-size: get-font-size( $unitless-value );
}
```
… With `$unitless-value` being any numeric value.
While for values below **1**, Callisto will compute it as is, values _above_ **1** will be simplified to be either an integer "**n**" unit or **n.5**. This way, we avoid _too much of a customization_ in any given project.

```scss
.my-bem-element--state {
  font-size: get-regular-font-size(); // will, by default, output 1rem
}
```

### Notable dependencies

Nope! Hu… Almost none:
- [Chromatic-sass](https://github.com/maxluster/chromatic-sass) for better color handling;
… And [Gulp](https://github.com/gulpjs/gulp) for all automated transformation tasks.



### Available tasks

- _[todo]_ `npm start`
- _[todo]_ `gulp build`
- _[todo]_ `gulp lint`



