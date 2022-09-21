function pa(a,r) {
    let sequencia = [] ;
    for (let i = 1; i <= 10; i++) {
        sequencia.push(a);
        a += r;
    }
    document.write(sequencia);
}

pa(7,9)