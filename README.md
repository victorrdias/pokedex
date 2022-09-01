# como tipar um component react com props

```typescript
type Entrada1 = {
  props1: string;
  props2: boolean;
};

interface Entrada2 {
  props3: number;
  props4: (nome: string) => null;
}

const component = (
  { props1, props2 }: Entrada1,
  { props3, props4 }: Entrada2
) => {
  return props2;
};
```
