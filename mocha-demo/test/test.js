mocha.ui('bdd');
describe('Welcome to Tmall', function(){
	before(function(){
		window.render();
	});
	it('Hello', function(){
		document.getElementById('tmall').textContent.should.be.eql('天猫前端招人，有意向的请发送简历至lingyucoder@gmail.com');
	});
});
mocha.run();