import { visit } from 'unist-util-visit'

function countLines(string) {
	let count = 1;

	let chr;
	let i = 0, end = string.length;
	for (; i < end; ++i) {
		if (string[i] == '\n' || string[i] == '\r') {
			count = 2;
			chr = string[i];
			break;
		}
	}
	for (++i; i < end; ++i) {
		if (string[i] == chr) {
			++count;
		}
	}
	return count;
}

export default function rehypeLineCount() {
	return (tree) => {
		visit(tree, 'element', (node) => {
			if (node.tagName === 'code' && node.children.length == 1 && typeof node.children[0].type !== 'undefined' && node.children[0].type === 'text') {
				node.properties.dataLineCount = countLines(node.children[0].value.trim())
			}
		})
	}
}