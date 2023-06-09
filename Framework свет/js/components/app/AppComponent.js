class AppComponent extends Component {
    constructor(options) {
        super(options);
        this.header = new HeaderComponent({
            id: 'header',
            parent: this.id,
            template: template.headerTemplate,
            callbacks: {
                showComponent: name => this.showComponent(name)
            }
        });

        this.Math2D = new Math2DComponent({
            id: 'Math2D',
            parent: this.id,
            template: template.Math2DTemplate
        });
        this.Math3D = new Math3DComponent({
            id: 'Math3D',
            parent: this.id,
            template: template.Math3DTemplate,
            className: 'hide'
        });
        this.calculator = new CalculatorComponent({
            id: 'calculator',
            parent: this.id,
            template: template.calculatorTemplate,
            className: 'hide'
        });
    }

    showComponent(name) {
        this.Math2D.hide();
        this.Math3D.hide();
        this.calculator.hide();
        this[name].show();
    }
}