function StrDescriptor(validator: Array<string>, ...kwargs) {
    return function (target: any, key: string) {
        let value: string = target[key];

        const getter = function () {
            return value;
        };

        const setter = function (newValue: string) {
            if (newValue.length > maxLength) {
                throw new Error(`String is too long (max length ${maxLength})`);
            }
            value = newValue;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}