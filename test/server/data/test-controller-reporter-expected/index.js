const { ElementScreenshotOptions } = require('../../../../lib/test-run/commands/options');

const basicOptions = { speed: 1 };

const mouseOptions = Object.assign({
    modifiers: {
        alt:   true,
        ctrl:  true,
        meta:  true,
        shift: true,
    },
    offsetX:   1,
    offsetY:   2
}, basicOptions);

const clickOptions = Object.assign({ caretPos: 1 }, mouseOptions);

const dragToElementOptions = Object.assign({
    destinationOffsetX: 3,
    destinationOffsetY: 4
}, mouseOptions);

const typeTextOptions = Object.assign({
    replace: true,
    paste:   true
}, clickOptions);

module.exports = [
    {
        testRunId: 'test-run-id',
        name:    'click',
        command: {
            options:  clickOptions,
            selector: 'Selector(\'#target\')',
            type:     'click'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'rightClick',
        command: {
            options:  clickOptions,
            selector: 'Selector(\'#target\')',
            type:     'right-click'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'doubleClick',
        command: {
            options:  clickOptions,
            selector: 'Selector(\'#target\')',
            type:     'double-click'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'hover',
        command: {
            options:  mouseOptions,
            selector: 'Selector(\'#target\')',
            type:     'hover'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'drag',
        command: {
            options:     mouseOptions,
            selector:    'Selector(\'#target\')',
            dragOffsetX: 100,
            dragOffsetY: 200,
            type:        'drag'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'dragToElement',
        command: {
            options:             dragToElementOptions,
            selector:            'Selector(\'#target\')',
            destinationSelector: 'Selector(\'#target\')',
            type:                'drag-to-element'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'typeText',
        command: {
            options:  typeTextOptions,
            selector: 'Selector(\'#input\')',
            text:     'test',
            type:     'type-text'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'selectText',
        command: {
            options:  basicOptions,
            selector: 'Selector(\'#input\')',
            startPos: 1,
            endPos:   3,
            type:     'select-text'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId:   'test-run-id',
        name: 'selectTextAreaContent',

        command: {
            options:   basicOptions,
            selector:  'Selector(\'#textarea\')',
            startLine: 1,
            startPos:  2,
            endLine:   3,
            endPos:    4,
            type:      'select-text-area-content'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'selectEditableContent',
        command: {
            options:       basicOptions,
            startSelector: 'Selector(\'#contenteditable\')',
            endSelector:   'Selector(\'#contenteditable\')',
            type:          'select-editable-content'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'pressKey',
        command: {
            options: basicOptions,
            keys:    'enter',
            type:    'press-key'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId:   'test-run-id',
        name: 'wait',

        command: {
            type:    'wait',
            timeout: 1
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'navigateTo',
        command: {
            type: 'navigate-to',
            url:  './index.html'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'setFilesToUpload',
        command: {
            selector: 'Selector(\'#file\')',
            type:     'set-files-to-upload',
            filePath: '../test.js'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'clearUpload',
        command: {
            selector: 'Selector(\'#file\')',
            type:     'clear-upload',
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'takeScreenshot',
        command: {
            path:     'screenshotPath',
            fullPage: true,
            type:     'take-screenshot',
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'takeElementScreenshot',
        command: {
            selector: 'Selector(\'#target\')',
            path:     'screenshotPath',
            type:     'take-element-screenshot',
            options:  new ElementScreenshotOptions()
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'resizeWindow',
        command: {
            width:  200,
            height: 200,
            type:   'resize-window'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'resizeWindowToFitDevice',
        command: {
            device:  'Sony Xperia Z',
            options: {
                portraitOrientation: true
            },
            type:    'resize-window-to-fit-device'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'maximizeWindow',
        command: {
            type: 'maximize-window'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'switchToIframe',
        command: {
            selector: 'Selector(\'#iframe\')',
            type:     'switch-to-iframe'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'switchToMainWindow',
        command: {
            type: 'switch-to-main-window'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'setNativeDialogHandler',
        command: {
            dialogHandler: {
                args: [],
                code: '(function(){ return (function () {return true;});})();'
            },
            type: 'set-native-dialog-handler'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'getNativeDialogHistory',
        command: {
            type: 'get-native-dialog-history'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'getBrowserConsoleMessages',
        command: {
            type: 'get-browser-console-messages',
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'debug',
        command: {
            type: 'debug'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'setTestSpeed',
        command: {
            speed: 1,
            type:  'set-test-speed'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'setPageLoadTimeout',
        command: {
            duration: 1,
            type:     'set-page-load-timeout'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    },
    {
        testRunId: 'test-run-id',
        name:    'useRole',
        command: {
            role: {
                loginPage: 'http://example.com',
                options:   { preserveUrl: true },
                phase:     'uninitialized'
            },
            type: 'useRole'
        },
        test:    {
            id:    'test-id',
            name:  'test-name',
            phase: 'initial'
        },
        fixture: {
            id:   'fixture-id',
            name: 'fixture-name',
        },
        browser: { alias: 'test-browser', headless: false }
    }
];
