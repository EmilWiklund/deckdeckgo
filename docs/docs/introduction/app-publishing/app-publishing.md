# Publishing

[DeckDeckGo] bundles your presentation as a Progressive Web App which then can be hosted on any Web Server or hosting solution.

> Not sure what PWAs are? Check out Ionic's [PWA Overview](https://ionicframework.com/pwa) for more info.

## Table of contents

- [SEO friendly](#app-publishing-seo-friendly)
- [Pre-production](#app-publishing-before-production)
- [Production build](#app-publishing-production-build)

## SEO friendly

It is worth to notice that [DeckDeckGo] is, respectively your slides build with are, SEO friendly.

Therefore, you do **not** need to implement a complex server-side rendering (SSR) hosting solution.

## Pre-production

Before your final build and most importantly before publishing your deck online, don't forget to edit the information about your presentation in the following files:

1. Edit the meta tags in the `<head/>` of your `src/index.html` file

2. Generate your icons and replace the respective files in the `assets` folder. I suggest using [RealFaviconGenerator](https://realfavicongenerator.net), which is a great tool for this purpose.

3. Update the information in the `manifest.json` file

## Production build

When you are ready for your talk or ready to publish your slides online, run the following command in a terminal to bundle your presentation for production:

```bash
npm run build
```

If you do not wish to remove your notes from your presentation, run the build command with the attributes `--notes`:

```bash
npm run build -- --notes
```

If you wish to run your presentation locally afterwards without rebuilding everything, you could run the following command to start only the dev server:

```bash
npm run dev
```

[DeckDeckGo]: https://deckdeckgo.com
