# capacitor-signal-strength

Capacitor plugin signal strength

## Install

```bash
npm install capacitor-signal-strength
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`getdBm()`](#getdbm)
* [`getPercentage()`](#getpercentage)
* [`getLevel()`](#getlevel)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### getdBm()

```typescript
getdBm() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### getPercentage()

```typescript
getPercentage() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### getLevel()

```typescript
getLevel() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------

</docgen-api>
