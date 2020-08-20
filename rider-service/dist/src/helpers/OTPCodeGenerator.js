"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function otpCodeGenerator(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.default = otpCodeGenerator;
//# sourceMappingURL=OTPCodeGenerator.js.map