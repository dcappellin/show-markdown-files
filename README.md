# show markdown files
A very simple HTML page that loads a markdown files and show it.

Usage:

- <http://yourwebsite/index.html?h=something_title>
- <http://yourwebsite/notes.html?something_title>

loads a markdown file with filename `something_title` from the folder `docs` and use the substring `title` as title of the web page.

For example:

- <http://notes.cappell.in/index.html?h=d41d8cd98f00b204e9800998ecf8427e_Markdown_test>
- <http://notes.cappell.in/notes.html?d41d8cd98f00b204e9800998ecf8427e_Markdown_test>

## About notes.html
The file `notes.html` uses SSI (Server Side Includes) code which must be enabled in the web server. For example, to enable it in NGINX please refer to <https://nginx.org/en/docs/http/ngx_http_ssi_module.html>
