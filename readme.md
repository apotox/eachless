## Eachless


- tiny package helps you avoid the nested loops (for-each hell)
```
#install
npm i -s eachless
```
```js
#usage
var {Eachless} = require("eachless")
```

```json

data = {
    "products":[{
        ...
        "orders":[{
            ...
            "tags":[{
                "label": "laptop",
                "id": "tag-1"
            }]
        }]
    },{
        ...
        "orders":[{
            ...
            "tags":[{
                "label": "smartphone",
                "id": "tag-2"
            },{
                "label": "keyboard",
                "id": "tag-3"
            }]
        }]
    }]
}
```
to iterate through all the tag labels, use

- example code:

```js
const labelsIterator = Eachless(data,['products','orders','tags','label'])
```


```js
for(const label of labelsIterator){
    console.log(label)
}
```

- result:

```
laptop
smartphone
keyboard
```

