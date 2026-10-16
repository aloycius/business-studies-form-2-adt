# Business Studies — Form Two

Read the accessible book: **https://aloycius.github.io/business-studies-form-2-adt/**

This edition contains all 72 pages of the supplied Tanzania Institute of Education textbook, converted with [ADT Studio](https://github.com/unicef/adt-studio) using the [ADT Book Conversion skill](https://github.com/kareeeeeeeeem/adt-book-conversion-skill).

The reader includes selectable text, source-based page layouts, accessible tables and business forms, image descriptions, page navigation, and English read-aloud with word highlighting. The scanned approval certificate includes an expandable text transcription.

## Run locally

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. Serve the files over HTTP; opening `index.html` directly as a local file can prevent the reader from loading its content.

## Contents and rights

This repository contains the static reader and publication documentation. The source PDF, processing database, entity history, caches, prompts, responses, credentials, and local audit artifacts are excluded.

Original textbook rights remain with Tanzania Institute of Education and the respective rights holders. This repository does not grant a new license to the textbook, its illustrations, or embedded source fonts.

The ADT reader software is distributed under GNU AGPL v3 or later; see [the software license](LICENSES/ADT-Studio.txt). Its [corresponding source archive](reader-source.zip) includes the browser runtime used for this edition and build instructions. Third-party software retains its respective licenses.
