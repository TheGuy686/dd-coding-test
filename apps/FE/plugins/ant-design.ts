import { App } from 'vue';

import {
    Affix,
    Anchor,
    AutoComplete,
    Alert,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Button,
    Calendar,
    Card,
    Collapse,
    Carousel,
    Cascader,
    Checkbox,
    Col,
    DatePicker,
    Divider,
    Dropdown,
    Form,
    Input,
    InputNumber,
    Layout,
    List,
    LocaleProvider,
    Menu,
    Mentions,
    Modal,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    Rate,
    Row,
    Select,
    Slider,
    Spin,
    Statistic,
    Steps,
    Switch,
    Table,
    Transfer,
    Tree,
    TreeSelect,
    Tabs,
    Tag,
    TimePicker,
    Timeline,
    Tooltip,
    Upload,
    Drawer,
    Skeleton,
    Comment,
    ConfigProvider,
    Empty,
    Result,
    Descriptions,
    PageHeader,
    Space,
    message,
    notification,
} from 'ant-design-vue';

const components = [
    Affix,
    Anchor,
    AutoComplete,
    Alert,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Button,
    Calendar,
    Card,
    Collapse,
    Carousel,
    Cascader,
    Checkbox,
    Col,
    DatePicker,
    Divider,
    Dropdown,
    Form,
    Input,
    InputNumber,
    Layout,
    List,
    LocaleProvider,
    Menu,
    Mentions,
    Modal,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    Rate,
    Row,
    Select,
    Slider,
    Spin,
    Statistic,
    Steps,
    Switch,
    Table,
    Transfer,
    Tree,
    TreeSelect,
    Tabs,
    Tag,
    TimePicker,
    Timeline,
    Tooltip,
    Upload,
    Drawer,
    Skeleton,
    Comment,
    ConfigProvider,
    Empty,
    Result,
    Descriptions,
    PageHeader,
    Space,
];

export default {
    install(app: App) {
        app.component('a-affix', Affix);
        app.component('a-anchor', Anchor);
        app.component('a-auto-complete', AutoComplete);
        app.component('a-alert', Alert);
        app.component('a-avatar', Avatar);
        app.component('a-back-top', BackTop);
        app.component('a-badge', Badge);
        app.component('a-breadcrumb', Breadcrumb);
        app.component('a-button', Button);
        app.component('a-calendar', Calendar);
        app.component('a-card', Card);
        app.component('a-collapse', Collapse);
        app.component('a-carousel', Carousel);
        app.component('a-cascader', Cascader);
        app.component('a-checkbox', Checkbox);
        app.component('a-col', Col);
        app.component('a-date-picker', DatePicker);
        app.component('a-divider', Divider);
        app.component('a-dropdown', Dropdown);
        app.component('a-form', Form);
        app.component('a-input', Input);
        app.component('a-input-number', InputNumber);
        app.component('a-layout', Layout);
        app.component('a-list', List);
        app.component('a-locale-provider', LocaleProvider);
        app.component('a-menu', Menu);
        app.component('a-mentions', Mentions);
        app.component('a-modal', Modal);
        app.component('a-pagination', Pagination);
        app.component('a-popconfirm', Popconfirm);
        app.component('a-popover', Popover);
        app.component('a-progress', Progress);
        app.component('a-radio', Radio);
        app.component('a-rate', Rate);
        app.component('a-row', Row);
        app.component('a-select', Select);
        app.component('a-slider', Slider);
        app.component('a-spin', Spin);
        app.component('a-statistic', Statistic);
        app.component('a-steps', Steps);
        app.component('a-switch', Switch);
        app.component('a-table', Table);
        app.component('a-transfer', Transfer);
        app.component('a-tree', Tree);
        app.component('a-tree-select', TreeSelect);
        app.component('a-tabs', Tabs);
        app.component('a-tag', Tag);
        app.component('a-time-picker', TimePicker);
        app.component('a-timeline', Timeline);
        app.component('a-tooltip', Tooltip);
        app.component('a-upload', Upload);
        app.component('a-drawer', Drawer);
        app.component('a-skeleton', Skeleton);
        app.component('a-comment', Comment);
        app.component('a-config-provider', ConfigProvider);
        app.component('a-empty', Empty);
        app.component('a-result', Result);
        app.component('a-descriptions', Descriptions);
        app.component('a-page-header', PageHeader);
        app.component('a-space', Space);
    },
}