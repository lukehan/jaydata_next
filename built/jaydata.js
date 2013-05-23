var Jay;
(function (Jay) {
    (function (metadata) {
        (function (Kind) {
            Kind[Kind["property"] = 0] = "property";
            Kind[Kind["method"] = 1] = "method";

            Kind[Kind["event"] = 2] = "event";
        })(metadata.Kind || (metadata.Kind = {}));
        var Kind = metadata.Kind;

        var ClassEngine = (function () {
            function ClassEngine() {
            }
            ClassEngine.prototype.define = function (name, base, memberDefinitions) {
                var _this = this;
                var result = (function (base) {
                    var _class_ = function () {
                        base.apply(this, arguments);
                    };
                    _class_.prototype = Object.create(base.prototype, { constructor: { value: _class_, enumerable: false } });
                    for (var j in memberDefinitions) {
                        var md = memberDefinitions[j];
                        _class_.prototype[j] = memberDefinitions[j];
                    }
                    _class_.className = name;
                    _class_.base = null;
                    return _class_;
                })(base || Jay.Base);
                return result;
            };
            return ClassEngine;
        })();
        metadata.ClassEngine = ClassEngine;
    })(Jay.metadata || (Jay.metadata = {}));
    var metadata = Jay.metadata;

    var Base = (function () {
        function Base(a) {
            this.a = a;
        }
        Base.define = function (memberDefinitions) {
        };
        return Base;
    })();
    Jay.Base = Base;

    Jay.Class = new metadata.ClassEngine();
})(Jay || (Jay = {}));

$data = Jay;
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Jay;
(function (Jay) {
    var ObservableClass = (function (_super) {
        __extends(ObservableClass, _super);
        function ObservableClass() {
            _super.apply(this, arguments);
        }
        return ObservableClass;
    })(Jay.Base);
    Jay.ObservableClass = ObservableClass;

    var Entity = (function (_super) {
        __extends(Entity, _super);
        function Entity() {
            _super.apply(this, arguments);
        }
        Entity.abc = function () {
        };
        return Entity;
    })(ObservableClass);
    Jay.Entity = Entity;
})(Jay || (Jay = {}));
