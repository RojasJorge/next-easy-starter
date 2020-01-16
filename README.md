# next-easy-starter
[Nextjs](https://nextjs.org/) + [Easy Peasy](https://easy-peasy.now.sh/) as global states manager.

## Installation
```bash
npm install
```
## Config
You can change environment ports on package.json->scripts

```json
  "scripts": {
    "dev": "next dev -p 4001",
    "build": "next build",
    "start": "next start -p 4006"
  }
```

App external source file configuration (API REST) "config.js"

### Authentication store info at -> ./store/auth.js

## [Ant Design](https://ant.design/docs/react/introduce) as user interface
Example:
```javascript
import { Form, Input, Button } from "antd";
<Form.Item label="Email">
    <Input
      name="email"
      size="large"
      value=""
      required
    />
</Form.Item>
```