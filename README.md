## Stretch goals

- [x] Fix page titles on post pages to match the post title
- [x] Handle the error when you click to vote while not logged in to show a nice error message
- [x] Try to make it so I can’t vote more than once (Fix could be done in the SQL with the constraints  (ideally), or in-app code to check the db before adding a new row to the votes table)
  - Seemingly already done?
❌ Users would like a richer editing experience we’d like to incorporate TipTap (based on Prosemirror)
  - Impossible without rewriting big chunk of the app to be client-side

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair
