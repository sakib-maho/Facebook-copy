import json
from pathlib import Path
import unittest


class PostSchemaTests(unittest.TestCase):
    def test_posts_schema(self) -> None:
        posts = json.loads(Path("data/posts.json").read_text(encoding="utf-8"))
        self.assertGreaterEqual(len(posts), 3)
        for post in posts:
            self.assertIn("author", post)
            self.assertIn("content", post)
            self.assertIn("tags", post)
            self.assertIsInstance(post["tags"], list)
            self.assertTrue(post["author"].strip())


if __name__ == "__main__":
    unittest.main()
