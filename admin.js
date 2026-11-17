const dadosIniciais = [
    { id: 1, nome: "Ana Silva", email: "ana@email.com", mensagem: "Parabéns pelo portfólio incrível!", data: "2026-11-01" },
    { id: 2, nome: "Carlos Souza", email: "carlos@email.com", mensagem: "Excelente organização técnica.", data: "2026-11-02" },
    { id: 3, nome: "Beatriz Lima", email: "bia@email.com", mensagem: "Gostei muito do design em Bootstrap.", data: "2026-11-03" },
    { id: 4, nome: "Lucas Mendes", email: "lucas@email.com", mensagem: "Muito profissional o projeto do Senac.", data: "2026-11-04" },
    { id: 5, nome: "Mariana Costa", email: "mari@email.com", mensagem: "Adorei as visitas técnicas documentadas.", data: "2026-11-05" },
    { id: 6, nome: "João Pedro", email: "jp@email.com", mensagem: "Código limpo e bem estruturado.", data: "2026-11-06" },
    { id: 7, nome: "Bruna Rocha", email: "bruna@email.com", mensagem: "Boa sorte na conclusão do curso!", data: "2026-11-07" },
    { id: 8, nome: "Gabriel Santos", email: "gabriel@email.com", mensagem: "Fantástica a parte de competências.", data: "2026-11-08" },
    { id: 9, nome: "Larissa Souza", email: "larissa@email.com", mensagem: "Excelente iniciativa no projeto.", data: "2026-11-09" },
    { id: 10, nome: "Rafael Dias", email: "rafael@email.com", mensagem: "Top demais o site!", data: "2026-11-10" },
    { id: 11, nome: "Camila Duarte", email: "camila@email.com", mensagem: "Muito inspirador o portfólio.", data: "2026-11-11" },
    { id: 12, nome: "Felipe Azevedo", email: "felipe@email.com", mensagem: "Parabéns pelo empenho.", data: "2026-11-12" },
    { id: 13, nome: "Juliana Ribeiro", email: "juliana@email.com", mensagem: "Design responsivo muito bom.", data: "2026-11-13" },
    { id: 14, nome: "Thiago Martins", email: "thiago@email.com", mensagem: "Conteúdo técnico de alto nível.", data: "2026-11-14" },
    { id: 15, nome: "Patrícia Gomes", email: "patricia@email.com", mensagem: "Adorei a navegação entre as páginas.", data: "2026-11-15" },
    { id: 16, nome: "Rodrigo Cardoso", email: "rodrigo@email.com", mensagem: "Excelente uso de JavaScript.", data: "2026-11-16" },
    { id: 17, nome: "Vanessa Correia", email: "vanessa@email.com", mensagem: "Muito criativo o layout.", data: "2026-11-17" },
    { id: 18, nome: "Eduardo Pinto", email: "eduardo@email.com", mensagem: "Parabéns à autora do projeto.", data: "2026-11-18" },
    { id: 19, nome: "Natália Freitas", email: "natalia@email.com", mensagem: "Anotações muito úteis.", data: "2026-11-19" },
    { id: 20, nome: "Marcos Vinicius", email: "marcos@email.com", mensagem: "Sucesso na carreira de TI!", data: "2026-11-20" }
];

function verificarLocalStorage() {
    if (!localStorage.getItem("mensagens_portfolio")) {
        localStorage.setItem("mensagens_portfolio", JSON.stringify(dadosIniciais));
    }
}

function salvarMensagem(nome, email, mensagem) {
    let mensagens = JSON.parse(localStorage.getItem("mensagens_portfolio")) || [];
    let novaMensagem = {
        id: Date.now(),
        nome: nome,
        email: email,
        mensagem: mensagem,
        data: new Date().toISOString().split('T')[0]
    };
    mensagens.push(novaMensagem);
    localStorage.setItem("mensagens_portfolio", JSON.stringify(mensagens));
}

function lerMensagens() {
    return JSON.parse(localStorage.getItem("mensagens_portfolio")) || [];
}

function deletarMensagem(id) {
    let mensagens = lerMensagens();
    mensagens = mensagens.filter(msg => msg.id !== id);
    localStorage.setItem("mensagens_portfolio", JSON.stringify(mensagens));
}

window.onload = function() {
    verificarLocalStorage();

    const formulario = document.getElementById("formContato");
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("mensagem").value;

            salvarMensagem(nome, email, mensagem);

            alert("Mensagem enviada e guardada com sucesso no sistema local!");
            formulario.reset();
        });
    }
};