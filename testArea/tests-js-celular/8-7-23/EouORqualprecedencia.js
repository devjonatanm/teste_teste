const result = 0 || (1 && 5) || 3;
// OU ambos verdadeiros resulta no primeiro 
// E ambos verdadeiros 
// no caso: E primeiro fio false, resultou no segundo

// ordem precedência && depois||

console.log(result)
