import { h, app } from 'hyperapp';

import style from './app.scss';

import logger from '@hyperapp/logger';

import {
  FloatingActionButton,
  Button,
  Checkbox,
  Radio,
  Switch,
  TabBar,
  Tab,
  TextField,
  LinearProgress,
  withRipple,
} from '../../src/index';

const ButtonWithRipple = withRipple(Button);
const FloatingActionButtonWithRipple = withRipple(FloatingActionButton);

const state = {
  theme: {},
  floatingActionButton: {},
  button: {},
  checkbox: {},
  textField: {},
  tabs: {
    activeTabIndex: 0,
  },
  switch: {},
  linearProgress: {},
};

const actions = {
  toggleAttribute: ({ component, attribute }) => (state) => ({
    [component]: {
      ...state[component],
      [attribute]: !state[component][attribute],
    },
  }),
  onActiveTabIndexChanged: (activeTabIndex) => (state) => ({
    tabs: {
      ...state.tabs,
      activeTabIndex,
    },
  }),
  onCheckboxChange: (e) => (state) => ({
    checkbox: {
      ...state.checkbox,
      checked: e.target.checked,
    },
  }),
  onSwitchChange: (e) => (state) => ({
    switch: {
      ...state.switch,
      checked: e.target.checked,
    },
  }),
};

const tabs = ["one", "two", "three", "four"];

const Option = ({
  component,
  attribute,
  state,
  toggleAttribute,
}) => {
  return (
    <li class="mdc-list-item" onclick={() => toggleAttribute({ component, attribute })}>
      {attribute}
      {!!state[component][attribute] ? (
        <i class="mdc-list-item__meta material-icons mdc-button__icon">check_box</i>
      ) : (
        <i class="mdc-list-item__meta material-icons mdc-button__icon">check_box_outline_blank</i>
      )}
    </li>
  );
};

const view = (state, actions) => {
  console.table(state);

  return (
    <main class={state.theme.dark ? `${style["demo-dark"]} mdc-theme--dark` : ""}>
      <section>
        <h1 class="mdc-typography--headline">Theme</h1>
        <ul class={`${style["demo-options"]} mdc-list`}>
          <Option
            component="theme"
            attribute="dark"
            state={state}
            toggleAttribute={actions.toggleAttribute}
            />
        </ul>
      </section>
      <section>
        <h1 class="mdc-typography--headline">Floating Action Button</h1>
        <figure class={style["demo-component"]}>
          <FloatingActionButton class="material-icons" {...state.floatingActionButton}>
            star
          </FloatingActionButton>
          <figcaption>FAB</figcaption>
        </figure>
        <figure class={style["demo-component"]}>
          <FloatingActionButtonWithRipple class="material-icons" {...state.floatingActionButton}>
            star
          </FloatingActionButtonWithRipple>
          <figcaption>FAB with ripple</figcaption>
        </figure>
        <ul class={`${style["demo-options"]} mdc-list`}>
          {['mini'].map(attribute => {
            return (
              <Option
                component="floatingActionButton"
                attribute={attribute}
                state={state}
                toggleAttribute={actions.toggleAttribute}
                />
            );
          })}
        </ul>
      </section>
      <section>
        <h1 class="mdc-typography--headline">Button</h1>
        <figure class={style["demo-component"]}>
          <Button {...state.button}>
            Button
          </Button>
          <figcaption>Button</figcaption>
        </figure>
        <figure class={style["demo-component"]}>
          <Button {...state.button}>
            <i class="material-icons mdc-button__icon">favorite</i>
            Button
          </Button>
          <figcaption>Button with icon</figcaption>
        </figure>
        <figure class={style["demo-component"]}>
          <ButtonWithRipple {...state.button}>
            Button
          </ButtonWithRipple>
          <figcaption>Button with ripple</figcaption>
        </figure>
        <figure class={style["demo-component"]}>
          <ButtonWithRipple {...state.button}>
            <i class="material-icons mdc-button__icon">favorite</i>
            Button
          </ButtonWithRipple>
          <figcaption>Button with ripple and icon</figcaption>
        </figure>
        <ul class={`${style["demo-options"]} mdc-list`}>
          {['raised', 'unelevated', 'stroked', 'dense', 'compact', 'disabled'].map(attribute => {
            return (
              <Option
                component="button"
                attribute={attribute}
                state={state}
                toggleAttribute={actions.toggleAttribute}
                />
            );
          })}
        </ul>
      </section>
      <section>
        <h1 class="mdc-typography--headline">Tabs</h1>
        <span class={style["demo-component"]}>
          <TabBar>
            {tabs.slice(0, state.textField.fourthTab ? 4 : 3).map((tab, i) => (
              <Tab
                key={tab}
                active={i === state.tabs.activeTabIndex}
                onclick={() => actions.onActiveTabIndexChanged(i)}
                >
                {tab}
              </Tab>
            ))}
          </TabBar>
        </span>
        <ul class={`${style["demo-options"]} mdc-list`}>
          <li class="mdc-list-item">
            activeTabIndex
            <span class="mdc-list-item__meta">
              {state.tabs.activeTabIndex}
            </span>
          </li>
          <Option
            component="textField"
            attribute="fourthTab"
            state={state}
            toggleAttribute={actions.toggleAttribute}
            />
        </ul>
      </section>
      <section>
        <h1 class="mdc-typography--headline">Text Field</h1>
        <span class={`${style["demo-component"]} ${style["demo-component--block"]}`}>
          <TextField
            {...state.textField}
            placeholder="Placeholder text"
            rows={8}
            cols={64}
            />
        </span>
        <ul class={`${style["demo-options"]} mdc-list`}>
          {['box', 'outlined', 'dense', 'fullWidth', 'textarea', 'disabled', 'required'].map(attribute => {
            return (
              <Option
                component="textField"
                attribute={attribute}
                state={state}
                toggleAttribute={actions.toggleAttribute}
                />
            );
          })}
        </ul>
      </section>
      <section>
        <h1 class="mdc-typography--headline">Checkbox</h1>
        <figure class={style["demo-component"]}>
          <Checkbox
            {...state.checkbox}
            onchange={actions.onCheckboxChange}
            value="checkbox"
            />
          <figcaption>Checkbox</figcaption>
        </figure>
        <ul class={`${style["demo-options"]} mdc-list`}>
          {['checked', 'disabled'].map(attribute => {
            return (
              <Option
                component="checkbox"
                attribute={attribute}
                state={state}
                toggleAttribute={actions.toggleAttribute}
                />
            );
          })}
        </ul>
      </section>
      <section>
        <h1 class="mdc-typography--headline">Switch</h1>
        <figure class={style["demo-component"]}>
          <Switch
            {...state.switch}
            onchange={actions.onSwitchChange}
            value="switch"
            />
          <figcaption>Switch</figcaption>
        </figure>
        <ul class={`${style["demo-options"]} mdc-list`}>
          {['checked', 'disabled'].map(attribute => {
            return (
              <Option
                component="switch"
                attribute={attribute}
                state={state}
                toggleAttribute={actions.toggleAttribute}
                />
            );
          })}
        </ul>
      </section>
      <section>
        <h1 class="mdc-typography--headline">Radio</h1>
        <span class={style["demo-component"]}>
          <Checkbox
            {...state.checkbox}
            onchange={actions.onCheckboxChange}
            value="checkbox"
            />
        </span>
        <ul class={`${style["demo-options"]} mdc-list`}>
          {['checked', 'disabled'].map(attribute => {
            return (
              <Option
                component="checkbox"
                attribute={attribute}
                state={state}
                toggleAttribute={actions.toggleAttribute}
                />
            );
          })}
        </ul>
      </section>
      <section>
        <h1 class="mdc-typography--headline">Linear Progress</h1>
        <span class={`${style["demo-component"]} ${style["demo-component--block"]}`}>
          <LinearProgress
            {...state.linearProgress}
            value={state.linearProgress.value50 ? 0.5 : 0}
            bufferValue={state.linearProgress.buffer75 ? 0.75 : 1}
            />
        </span>
        <ul class={`${style["demo-options"]} mdc-list`}>
          {['indeterminate', 'reversed', 'closed', 'value50', 'buffer75'].map(attribute => {
            return (
              <Option
                component="linearProgress"
                attribute={attribute}
                state={state}
                toggleAttribute={actions.toggleAttribute}
                />
            );
          })}
        </ul>
      </section>
    </main>
  );
};

const main = logger()(app)(state, actions, view, document.body);

console.log(main);