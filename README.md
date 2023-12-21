# activate-hermit

Github Action to activate a Hermit environment.

## How to use

See [action.yml](action.yml) for the ground truth.

### Easy mode: activate Hermit in the root of the repository

```yaml
steps:
  - uses: actions/checkout@v3
  - uses: cashapp/activate-hermit@v1
```

### Hard mode: activate Hermit in a sub-directory

```yaml
steps:
  - uses: actions/checkout@v3
  - uses: cashapp/activate-hermit@v1
    with:
      working-directory: subproject-a
```

### Enable caching of extracted packages

This can signficantly speed up builds.

```yaml
steps:
  - uses: actions/checkout@v3
  - uses: cashapp/activate-hermit@v1
    with:
      cache: "true"
```

# License

Copyright © 2023 Block, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
