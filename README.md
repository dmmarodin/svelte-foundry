# Svelte Foundry

Svelte Foundry is a headless UI library designed for Svelte and built with Tailwind CSS. It offers a range of customizable components to help you build modern, performant web applications.

Check out the [example page](https://dmmarodin.github.io/svelte-foundry/) to see the components in action.

## Images

![Example Page](docs/example-page.png)

## Components

Svelte Foundry currently offers the following components:

- **Buttons**: Customizable buttons with various styles.
- **Text Inputs**: Flexible text input fields.
- **Checkbox**: Stylish and accessible checkboxes.
- **Switch**: Toggle switches for boolean values.
- **Cards**: Card components for displaying content.
- **Tab Panel**: Tabbed navigation panels.
- **Badges**: Badges for notifications and labels.
- **Modals**: Modal dialogs with controls.
- **Toast Notifications**: Promise-based API for toast notifications.

## Getting Started

> **Note:** Svelte Foundry is in very early development. Expect frequent updates and changes.

### Prerequisites

Ensure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Svelte](https://svelte.dev/)

### Setting Up a Svelte Project

If you don't already have a Svelte project, you can set one up using the following commands:

```bash
# Create a new Svelte project
npx degit sveltejs/template my-svelte-app
cd my-svelte-app

# Install dependencies
npm install
# or
yarn install
```

### Installation

You can install Svelte Foundry using npm or yarn:

```bash
npm install svelte-foundry
# or
yarn add svelte-foundry
```

## Usage

After installation, you can start using the components in your Svelte project:

```jsx
<script>
	import {
		Button,
		TextInput,
		Checkbox,
		Switch,
		Card,
		TabPanel,
		Badge,
		Modal,
		Toast
	} from 'svelte-foundry';
</script>

<Button>Click Me</Button>
<TextInput placeholder="Enter text" />
<Checkbox label="Accept terms" />
<Switch />
<Card>Card Content</Card>
<TabPanel>
	<div slot="tab">Tab 1</div>
	<div slot="panel">Panel 1 Content</div>
</TabPanel>
<Badge>New</Badge>
<Modal>Modal Content</Modal>
<Toast message="Hello, World!" />
```

## License

This project is licensed under the Apache License 2.0. See the LICENSE file for details.
