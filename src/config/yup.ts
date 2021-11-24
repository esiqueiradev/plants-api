import { addMethod, string } from "yup";

function equalTo(ref, msg) {
	return this.test({
		name: 'equalTo',
		exclusive: false,
    message: msg || 'Deve ser igual a ${reference}',
		params: {
			reference: ref.path
		},
		test: function(value) {
      return value === this.resolve(ref)
		}
	})
};

addMethod(string, 'equalTo', equalTo);
