import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {BaseLitElement} from './base-lit-element.js';

@customElement('hello-element')
class HelloElement extends BaseLitElement {
	render() {
		return html`
			<div>Hello from MyElement!</div>
			<button
				hx-post="/clicked"
				hx-trigger="click"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Click Me!
			</button>
			<div x-data="{ open: false }">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					@click="open = ! open"
				>
					Toggle Content
				</button>

				<div x-show="open">
					Content...
				</div>
			</div>
		`;
	}
}