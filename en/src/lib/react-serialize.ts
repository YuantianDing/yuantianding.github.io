
/**
 * React-Serialize utility re-written in TypeScript
 * Originally created by @pravdomil (https://github.com/pravdomil/react-serialize)
 */
import * as React from 'react';

export const serialize = <T extends React.Component | JSX.Element>(component: T) => {
    const getName = (value: string | React.FunctionComponent<any> | symbol) => {
        if (typeof value === 'string') {
            return value
        } else if (typeof value === 'function') {
            return value.name
        } else if(value.toString() == 'Symbol(react.fragment)') {
            return value.toString();
        } else {
            throw new Error(`Serialization error: type ${typeof value} must be string or function`)
        }
    }
    const replacer = (key: string, value: any) => {
        switch (key) {
            case "type":
                return getName(value);
            case "_owner":
            case "_store":
            case "ref":
            // case "key":
                return
            default:
                return value
        }
    }

    return JSON.stringify(component, replacer);
}

export const deserialize = <T extends React.ReactElement<any>>(serializedComponent: string, components?: ComponentMap): T => {
    components = components ?? {};
    const componentData = JSON.parse(serializedComponent);

    return deserializeElement(componentData, components) as T;
}

type ComponentMap = {[key: string]: React.FunctionComponent<any> | React.ComponentClass<any> | string};
function deserializeElement(data: any, components: ComponentMap, key?: number): React.ReactNode {
    if(typeof data === 'boolean') {
        return data;
    } else if(Object.keys(data).length === 0) {
        return null;
    } else if(data === null || data === undefined) {
        throw new Error(`Deserialization error: undefined`)
    } else if (typeof data === 'string') {
        return data;
    } else if(Array.isArray(data)) {
        return data.map((x, i) => deserializeElement(x, components, i));
    } else if(!('type' in data)) {
        throw new Error(`Deserialization error: {${Object.keys(data)}} must have a type property`)
    } else if (data.type === 'Symbol(react.fragment)') {
        return deserializeElement(data.props.children, components);
    } else if (typeof data.type === 'string') {
        const type = components[data.type] ?? data.type;
        let props = data.props ?? {};
        props = Object.fromEntries(Object.entries(props).map(([key, value]) => [key, deserializeElement(value, components)]));
        if(key !== undefined && !('key' in props)) {
            props = {...props, key};
        }
        return React.createElement(type, props);
    } else {
        throw new Error(`Deserialization error: type ${typeof data.type} must be string`)
    }
}