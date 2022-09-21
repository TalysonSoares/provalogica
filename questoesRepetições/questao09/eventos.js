function pg(a,r) {
    let sequencia = [] ;
    for (let i = 1; i <= 10; i++) {
        sequencia.push(a);
        a *= r;
    }
    document.write(sequencia);
}

pg(4,8)