Given a LastPass export with html entities (`&amp;`, `&gt;`, or `&lt;`), this script will create a new version of the file with those invalid characters replaced.

To use it, feed the name of your `.csv` to the script, like so:

```js
node index.js example.csv
```

This will produce `CLEANED_example.csv` that should be safe to import into Bitwarden.
