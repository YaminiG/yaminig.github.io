# Adapting this Website

Many people have contacted me about adapting this website. I have tried to make things as simple as possible. There are still bugs. I am sorry. If you find a bug, please email me (help@mldangelo.com), submit a pull request (I'll buy you a coffee as a thank you), or submit an issue.

You may wish to fork this repository or remove my remote origin and add your own. Go [here](https://help.github.com/articles/changing-a-remote-s-url/) for more information on how to change remotes.

@@ -14,14 +13,6 @@ You may wish to fork this repository or remove my remote origin and add your own
### Setup

1. Run the project before making any modifications by following the set up and running instructions in the main [README.md](https://github.com/mldangelo/personal-site#set-up).
1. Change `homepage` in `package.json` to reflect where you plan to host the site. This is important for static exporting via react-snap. This also changes your path when developing locally. For example, a homepage of `mldangelo.com` places the site at `localhost:3000` and a homepage of `https://mldangelo.github.io/personal-site/` places the site at `localhost:3000/personal-site/`. If you plan to host at on a path such as `https://[your-github-username].github.io/[your-repo-name]`, you should set this now so that your development environment mirrors your production environment.
1. Create a `.env` file. To do this, run:

    ```bash
    cp sample.env .env
    ```

    and set values as appropriate. Most people will not need to modify this file.

### Adapt Content

@@ -37,7 +28,7 @@ I recommend keeping the project running as you go (with `npm start`) to help cor

### Deploy

See deployment instructions [here](https://github.com/mldangelo/personal-site#deploying-to-github-pages). If you plan to use a custom url, modify `public/CNAME` and enter your URL. You can run:
 If you plan to use a custom url, modify `public/CNAME` and enter your URL. You can run:

```bash
echo "[your-custom-domain][.com]" > public/CNAME
@@ -53,38 +44,4 @@ Next, configure your domains DNS record. See [here](https://help.github.com/arti

That's it. Thank you for reading. If you go through this guide and run into issues or areas you find unclear, please consider submitting a PR to help others like you.

## Common Pitfalls

Here are answers to questions I've been asked at least twice. I've attempted to simplify development and improve documentation throughout the project to address them. This section is updated frequently.

1. My CSS isn't rendering, or I see a 404 instead of my site:

    Make sure the `homepage` field of `package.json` points to where you plan to host your site index. Also, double check that you created a `CNAME` file (see deployment instructions above). If neither of these work, please open an issue or send me an [email](mailto:help@mldangelo.com).

2. LF / CRLF issues with eslint.

    This is a common Windows development pitfall. See @[FrozenFury](https://github.com/FrozenFury)'s [comment](https://github.com/mldangelo/personal-site/issues/263#issuecomment-759216299) for how to update your eslint config to resolve this issue.

3. master / main

    Github decided to rename the default branch of all of their repositories from master to main, and so did I. See their reasoning [here](https://github.com/github/renaming). If you're trying to pull in recent changes, consider renaming your own branch, or just create a merge commit from my main.

4. Google Analytics Warnings when exporting.

    Either set up Google Analytics or disable the `Analytics.js` component. Read more about [react-ga](https://github.com/react-ga/react-ga).

5. How do I configure git? What is nano?

    Read through [git-scm](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)'s excellent documentation. I recommend setting your default text editor to something you're comfortable with.I like to use vim for writing commit messages.

6. Can I host at [username.github.io]?

    Sure, see github's documentation [here](https://pages.github.com/). You will need to change branches. Create a new branch off of main, and configure `gh-pages` to write to main instead of a `gh-pages` branch.

7. How do I disable eslint?

    `echo "*\n" > .eslintignore` Although I really don't recommend it. Linters are good. They help prevent errors, enforce uniform style so that you can spend less time thinking about formatting and more time reading code, and eliminate easy nits for code reviews. If the rules aren't working for you, you should change them. See eslint's documentation [here](https://eslint.org/docs/about/) for more information.

8. Why is my website rendering the readme file?

    See 1. above and make sure that `.nojekyll` still exists in `public`. This file directs github to not attempt to render the website with Jekyll.
