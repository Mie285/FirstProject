function isPrimeNumber(n) {
    if (n < 2) {
        return false;
    }
    for (var num = 2; num < n; num++) {
        if (n % num === 0) {
            return false;
        }
    }
    return true;
}
document.write()
