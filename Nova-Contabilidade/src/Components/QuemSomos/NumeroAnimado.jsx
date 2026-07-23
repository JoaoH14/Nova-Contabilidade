import { useEffect, useRef, useState } from 'react';

export function NumeroAnimado({ valorFinal, prefixo = '', sufixo = '', duracao = 1800 }) {
    const [valorAtual, setValorAtual] = useState(0);
    const jaAnimouRef = useRef(false);
    const elementoRef = useRef(null);

    useEffect(() => {
        const elemento = elementoRef.current;
        if (!elemento) return;

        const observer = new IntersectionObserver(
            (entradas) => {
                const [entrada] = entradas;

                if (entrada.isIntersecting && !jaAnimouRef.current) {
                    jaAnimouRef.current = true;
                    const inicio = performance.now();

                    function animar(agora) {
                        const tempoDecorrido = agora - inicio;
                        const progresso = Math.min(tempoDecorrido / duracao, 1);
                        const progressoSuave = 1 - Math.pow(1 - progresso, 3);

                        setValorAtual(Math.floor(progressoSuave * valorFinal));

                        if (progresso < 1) {
                            requestAnimationFrame(animar);
                        } else {
                            setValorAtual(valorFinal);
                        }
                    }

                    requestAnimationFrame(animar);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(elemento);

        return () => observer.disconnect();
    }, [valorFinal, duracao]);

    return (
        <span ref={elementoRef}>
            {prefixo}{valorAtual}{sufixo}
        </span>
    );
}