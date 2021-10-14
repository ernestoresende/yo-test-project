# Yo! Tech Test for FrontEnd Talents

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), integrated with Typescript and styled with Styled Components.

## Quickstart

1. Clone the project and install the dependencies with `yarn install`.
2. Run the development server with `yarn dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Directory Structure

The project aims to organize it's logical parts into distinguishable parts that make sense in the context of the project. On the root, you'll find the following directories:

- `components` - Stores all components that compose the website.
- `pages` Stores all the high-level components used by Next.js routing system to create the static and dynamic pages.
- `assets` - Stores non-code assets like illustrations, custom icons and images.
- `styles` - Stores global definitions for styles, mixins and the project theme objects.

# Deep overview

This test was developed with the intention of not only meeting the minimum criteria specified in the breefing, but also showing how I would approach a front-end project that has some level of scalability in mind. This is a pattern that can be observed on the way I structured components (tons of low-level components for common UI pieces on the web like buttons and form controls), and styling (extensible theme object and CSS Properties available on the global scope).

## Components

Given that the project rellies in very stylized components, I took the time to create some primitives for common UI patterns where it made sense. For some other components that required a more complex control of state and transition, I've opted for some pre-built, unstyled primitives from Radix-UI.

The rationale for this is simple: there are components with very well defined behavior patterns on the web, and reiventing the wheel is a plain waste of time. I'm refering to things like modals, dialog boxes, sliders, dropdown menus and custom checkboxes.

Primitive components like the ones from Radix provide me with an API layer that is just flexible enough while keeping the component layers unstyled means that I have full control over styling, and the imported module is kept to minimum size.

## Styling

For styling I've opted for Styled Components for no other reason then it has been with me for a long time.

There are very godd CSS-in-JS solutions out there these days, but Styled Components has been very consistent with it's API's over the years, and uses a that makes a lot of sense when you think about component composition and data flow for React Components.

### Global Styles

Styled Components provides a style injector via de `createGlobalStyles` API. In this project, this is where all CSS resets and custom CSS properties sit. You can see it on `styles/global.ts`.

Notice that, while some properties point to static values, color properties point to their respective entries on the theme object. These objects are made available by Styled Component's very own `ThemeProvider`, which can receive a theme object that becomes available to every component in the `ThemeProvider` scope.

```jsx
const GlobalStyle = ({ children }) => {
  const lightTheme = Theme.lightTheme;

  /* In the event of a dark mode theme, or even custom theme flavors, we can use `useContext` 
  to keep track of the current theme preference and switch the theme that is going to be 
  provided to the `theme` prop on `<ThemeProvider>`. */

  return (
    <ThemeProvider theme={lightTheme}>
      <StyledGlobalStyles />
      {children}
    </ThemeProvider>
  );
};
```

### Theme Tokens

Color tokens are defined on `styles/theme.ts` to demonstrate how the theme can be extended to accomodate different themes in the future. Color tokens are named with a pattern of `color--<colorname>`, and follow the same pattern provided in the design spec. Using CSS Custom Properties, they are made available in the document scope:

![Visualization of the collor pallete available on the Chrome DevTools](https://res.cloudinary.com/ernestoresende/image/upload/v1633809550/Screen_Shot_2021-10-09_at_16.58.35_n1dtly.png).

With tokens that follow a common prefix an pattern, primitive components can be built and styled with different compositions that stick to the theme using a few basic props. Let's take the button for example:

```jsx
import * as React from 'react';
import { Button } from '@components/primitives/Button';

const ButtonExample = () => {
  return (
    <Button backgroundColor="orange1" textColor="orange5">
      Button Example
    </Button>
  );
};
```

> NOTE: The project uses theme tokens **as they were defined on the design spec**, and I've deliberately chosen not to interfere with the original ccolor pallete. But do keep in mind, some of the color combinations do not have the minimum contrast ratio to be accepted as accessible by [WCAG 2.1 AA criteria](https://www.w3.org/TR/WCAG21/#contrast-minimum). This is an example of a situation where I would normally try to coordinate efforts with the design team in order to define a more accessible collor pallete.

## Core features

### Login page

The briefing requested a login screen. Since there is no authentication server, I've decided to go with a simulation "session-based" authentication. The user get's access to a room by inputing a unique username, and a room. If a room with that name already exists, it's joined by the second remote user.

The user can upload a profile image, and it's preview get's displayed, but the lack of a authentication server makes so I don't send it anywhere. For the purposes of demonstration, the image is stored as a base64 token in localStorage, that same base64 encoded image ban sent to the server in a production application.

### Conference room

This is where the main challenge resides (and where many of the core features just couldn't be made in time).

The briefing asks for a 1:1 video-chat interface, where the user can see himself and the person he is speaking to, along with a text chat, and a dialog with options for video/audio devices.

The layout given by the briefing is very ambiguous, because it leaves a lot of questions and concerns unanswered:

1. The layout covers strict 1:1 conversations, what happens if there are more people? Or if I'm the only one in the room.
2. Layout shifts are radically dependent on menu interactions, and this imposes serious technical challenges that will require time to be built and tested. Is this the optimal option here?
3. Full-screen split of the 1:1 conversation means that we go against the normally expected aspect ratio for cameras and webcams (16/9 in most cases). This can result in a largelly cropped video overrall.

For the sake of simplicity, and because of the lack of other features such as the chat (and, very honestly, largely because of the lack of time on my end), I've made this page look much more simple than the layout given by the briefing, rendering two boxes vertically on desktop, and horizontally on mobile.

On Twilio, the Room is configured with the "Go" room type, for 1:1 conversations only.

This is not the ideal presentation, nor it matches all the features asked by the briefing, but it gives a rough idea of the approach used to interact with Twilio SDK's. There is much more the SDK allows you to do here, and I couldn't even scratch the surface with the rudimentary approach I've achieved here.

### Feedback page

When the call is finished, the user is asked to give feedback on the application. Here, this page is purely presentational, as again, there is no server to where I should send the collected information.

At this point, the user can choose to go back to the lobby room, or send the provided feedback.

---
