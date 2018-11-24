# Avapi Fetcher - A.v.g.l.e API Practice

## Before getting started

This command line application aims only to give a tutorial purpose. And means nothing about and has nothing to do with the api domain site which this application is making good use of.

It is good to be aware of that you should always not enter this api domain site which is a in fact an unsafe malicious adult website in any of of your devices and browsers despite its database library. Once you entered, you will be tracked by multiple annoying ad trackers and the most vicious ones, canvas and webGL fingerprints, you will never get ride of them. But the api requests are all safe and fine.

## Prerequisites

To use this command line(or as well as contribution guide)

- brew (OS X) install latest version of **Node**(>= 10) that supports _Async Iterator_, additionally **yarn** as well
- clone this git repo to local workspace
- input command lines below under this cloned repo root directory with **yarn** or **npm**

## Command line usage

Generally speaking, there are four types of searching: `all, search, jav, video`, you can use these type plus value to search. The raw JSON results will be written into a new json file in the _data_ folder Node.js automatically created as wel as output to console.

To get **all data**:

```bash
$ yarn start all
JSON raw results output...
```

For **common search**:

```bash
$ yarn start search <query>
JSON raw results output...
```

To search by **~~jav~~ id**:

```bash
$ yarn start jav <jav id>
JSON raw results output...
```

To search by database **video id**:

```bash
$ yarn start video <video id>
JSON raw results output...
```

## Todoist

- [x] fetch all **categories**(first page with fixed numbers).
- [x] fetch all **collections**(first page with fixed numbers).
- [x] fetch all **videos**(first page with fixed queries).
- [x] command line based **common videos search**(first page with fixed numbers).
- [x] command line based **~~jav~~ id videos search**(first page with fixed numbers).
- [x] command line based **vid videos search**.
- [ ] implement videos listing by customizable setting multiple query parameters.
- [ ] tests integration.
- [ ] CI/CD integration.
- [ ] improve command line supports.
- [ ] output all search results in one or multiple JSON files specified by types.
- [ ] visual frontend support
- [ ] others, optionally eslint, prettier configurations, docker support.

## Author

- [William](#https://github.com/Violetripple) - initial work

## License

Under MIT License.

## Enjoy your time:)
