# Tailwind Color Editor for Neos CMS

[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

## Introduction

This package provides a Color Editor for [TailwindCSS colors] which can be used in Neos CMS.

![example]

## Installation

Run this in your site package

```bash
composer require --no-update carbon/tailwindcolors
```

Then run `composer update` in your project directory.

## How to use

Add a property of type string and configure the editor as seen in this example:

```yaml
Foo.Bar:Content.Text:
  properties:
    options:
        preset: 'Carbon.TailwindColors'
      ui:
        label: Color
        inspector:
          editorOptions:
            disabled: false
            # If set, this color gets displayed if no value is set
            placeholder: gold
            # Hides the reset button if set to false
            allowEmpty: true
            # Set a custom label for the reset button
            resetLabel: Custom label
```

## Contributions

Contributions are very welcome!

Please create detailed issues and PRs.

[packagist]: https://packagist.org/packages/carbon/colorvalues
[latest stable version]: https://poser.pugx.org/carbon/colorvalues/v/stable
[total downloads]: https://poser.pugx.org/carbon/colorvalues/downloads
[license]: https://poser.pugx.org/carbon/colorvalues/license
[github forks]: https://img.shields.io/github/forks/CarbonPackages/Carbon.ColorValues.svg?style=social&label=Fork
[github stars]: https://img.shields.io/github/stars/CarbonPackages/Carbon.ColorValues.svg?style=social&label=Stars
[github watchers]: https://img.shields.io/github/watchers/CarbonPackages/Carbon.ColorValues.svg?style=social&label=Watch
[fork]: https://github.com/CarbonPackages/Carbon.ColorValues/fork
[stargazers]: https://github.com/CarbonPackages/Carbon.ColorValues/stargazers
[subscription]: https://github.com/CarbonPackages/Carbon.ColorValues/subscription
[tailwindcss colors]: https://tailwindcss.com/docs/customizing-colors
[example]: https://user-images.githubusercontent.com/4510166/196686127-adef31f3-20af-4c03-b205-5ff4817e966a.png
