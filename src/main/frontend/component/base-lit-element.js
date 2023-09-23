import {LitElement} from 'lit';

export class BaseLitElement extends LitElement {
	createRenderRoot() {
		return this;
	}
}