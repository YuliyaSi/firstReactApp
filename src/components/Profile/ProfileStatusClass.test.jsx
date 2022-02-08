import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusClass from "./ProfileStatusClass";

describe("ProfileStatusClass Component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatusClass status={'it-it'} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-it");
    });
    test("span should be displayed in component after creation", () => {
        const component = create(<ProfileStatusClass status={'it-it'} />);
        const root = component.root;
        const span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test("span should be displayed with correct status", () => {
        const component = create(<ProfileStatusClass status={'it-it'} />);
        const root = component.root;
        const span = root.findByType('span')
        expect(span.props.children).toBe('it-it');
    });
    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatusClass status={'it-it'} />);
        const root = component.root;
        expect(() => {
            root.findByType('input')
        }).toThrow();
    });
    test("input should be displayed instead of span in editMode", () => {
        const component = create(<ProfileStatusClass status={'it-it'} />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('it-it');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatusClass status={'it-it'} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});