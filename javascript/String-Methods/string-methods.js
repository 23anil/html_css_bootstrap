var str = "Good Evening bye";
var str1 = "   hello    ";
var str2 = "Hello";
var str3 = "hiiii";

console.log("length : ", str.length);
console.log("toUpperCase : ", str.toUpperCase()); // String convert in all UpperCase
console.log("toLowerCase : ", str.toLowerCase()); // String convert in all LowerCase
console.log("slice : ", str.slice(5, 12)); // extracts a part of a string range(5-12)
console.log("slice : ", str.slice(5, -10)); // Not working 5(16-10)
console.log("concat :", str2.concat(" ", str3));
console.log("substring : ", str.substring(13, 0));
console.log("substr : ", str.substr(0, 13));
console.log("concat : ", str1.concat(" Anil"));
console.log("replace : ", str.replace("g", "p"));
console.log(str.replaceAll("n", "k"));
console.log("trim : ", str1.trim());
console.log("trimStart : ", str1.trimStart());
console.log("trimEnd : ", str1.trimEnd());
console.log("padStart :", str2.padStart(10, "TY"));
console.log("padEnd :", str2.padEnd(15, "pop"));
console.log("charAt :", str2.charAt(2));
console.log("indexOf   :", str2.indexOf("l"));
console.log("charCodeAt :", str.charCodeAt(0));
console.log("split :", str.split("").reverse().join(""));
console.log(str.toUpperCase());
