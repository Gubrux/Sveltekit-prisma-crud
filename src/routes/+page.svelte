<div class="grid">
	<div>
		<h2>Articles</h2>
		<article>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque sit ipsam labore
				vitae tenetur, laudantium vel quaerat perspiciatis laboriosam nemo sed? Laboriosam aperiam
				delectus voluptatem corrupti ut blanditiis qui.
			</p>
			<button class="outline secondary">Delete Article </button>
			<a href="/" role="button" class="outline contrast" style="width: 100%;"> Edit Article </a>
		</article>
	</div>
	<form action="?/createArticle" method="POST">
		<h3>New article</h3>
		<label for="title"> Title</label>
		<input type="text" id="title" name="title" />
		<label for="title">Title</label>
		<textarea name="content" id="content" rows={5} />
		<button type="submit">Create Article </button>
	</form>
</div>
<!-- /grid -->
