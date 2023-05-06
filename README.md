# activate-hermit

Github Action to activate a Hermit environment.

## How to use

See [action.yml](action.yml) for the ground truth.

### Easy mode: activate Hermit in the root of the repository

```yaml
steps:
  - uses: actions/checkout@v3
  - uses: squareup/activate-hermit@v1
```

### Hard mode: activate Hermit in a sub-directory

```yaml
steps:
  - uses: actions/checkout@v3
  - name: Activate hermit
    uses: squareup/activate-hermit@v1
    with:
      working-directory: subproject-a
```
