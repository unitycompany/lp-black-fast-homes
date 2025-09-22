import React from "react";
import styled from "styled-components";
import Title from "../texts/Title";
import Question from "../others/Question";

const Container = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 28px 22px;
    border-radius: 16px;
    gap: 18px;
    width: 100%;
    flex: 1;
    box-shadow: inset 0 0 0 0.2px rgba(0, 0, 0, 0.4);

    @media (max-width: 768px){
        padding: 22px 12px;
        gap: 18px;
    }
`

const Tasks = styled.ol`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

export default function FAQ() {
    // accordion behavior: only one question open at a time
    // store the open question index (or null for none)
    const [openIndex, setOpenIndex] = React.useState(0);

    const handleToggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <>
            <Container>
                <Title 
                    children={"FAQ"}
                />
                <Tasks>
                    {[
                        {
                            question: "É possível obter financiamento para Steel Frame?",
                            response: "Sim. CAIXA Econômica Federal, bancos privados e financeiras especializadas aprovam projetos Steel Frame regularmente. Fornecemos documentação técnica completa para facilitar o processo."
                        },
                        {
                            question: "Qual a durabilidade real da estrutura Steel Frame?",
                            response: "Garantia estrutural de 10 anos, certificação PBQP-H e resistência comprovada contra intempéries, pragas e desgaste temporal. Performance superior à alvenaria tradicional."
                        },
                        {
                            question: "O prazo de 4 meses é factível?",
                            response: "Sim. Construção industrializada com cronograma controlado, independente de fatores climáticos. Tecnologia CNC garante precisão e agilidade executiva."
                        },
                        {
                            question: "Como funciona o isolamento termoacústico?",
                            response: "Certificação Rw 45dB com isolamento em lã de vidro. Redução média de 24% no consumo energético, proporcionando conforto superior aos hóspedes."
                        },
                        {
                            question: "A manutenção é complexa?",
                            response: "Estrutura modular facilita manutenções pontuais quando necessárias. Sistema construtivo elimina problemas recorrentes como fissuras e infiltrações."
                        }
                    ].map((q, idx) => (
                        <Question
                            key={idx}
                            questionText={q.question}
                            responseText={q.response}
                            isOpen={openIndex === idx}
                            onToggle={() => handleToggle(idx)}
                        />
                    ))}
                </Tasks>
            </Container>
        </>
    )
}