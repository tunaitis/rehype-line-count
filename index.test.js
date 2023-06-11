import { rehype } from 'rehype'
import rehypeLineCount from './index.js'

test('adds a data line count attribute to the code element', () => {
	const input = `
	<pre>
		<code>
			console.log('hello')
			console.log('world')
		</code>
	</pre>
	`
	rehype()
		.data('settings', { fragment: true })
		.use(rehypeLineCount)
		.process(input, (error, file) => {
			const result = String(file)
			expect(/data-line-count="2"/.test(result)).toBeTruthy()
		})
});
