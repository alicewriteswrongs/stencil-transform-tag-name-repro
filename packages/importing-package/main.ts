import { defineCustomElements } from 'transform-tag-name';

defineCustomElements(window, { transformTagName: tagName => `YOUR_APP_ID-${tagName}` });
