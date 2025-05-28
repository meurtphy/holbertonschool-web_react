/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sumMajorCredits: () => (/* binding */ sumMajorCredits),
/* harmony export */   sumMinorCredits: () => (/* binding */ sumMinorCredits)
/* harmony export */ });
/* ---------- Interfaces avec “brand” pour les différencier ---------- */
/* -------------------- Fonctions utilitaires -------------------- */
/**
 * Additionne deux MajorCredits et renvoie un nouvel objet MajorCredits.
 */
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'major', // on garde la marque Major
    };
}
/**
 * Additionne deux MinorCredits et renvoie un nouvel objet MinorCredits.
 */
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'minor', // on garde la marque Minor
    };
}
/* --------------------- Démo rapide --------------------- */
var math = { credits: 3, __brand: 'major' };
var physics = { credits: 4, __brand: 'major' };
var pe = { credits: 1, __brand: 'minor' };
var art = { credits: 2, __brand: 'minor' };
console.log(sumMajorCredits(math, physics)); // { credits: 7, __brand: 'major' }
console.log(sumMinorCredits(pe, art)); // { credits: 3, __brand: 'minor' }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLHlFQUF5RTtBQWlCekUscUVBQXFFO0FBRXJFOztHQUVHO0FBQ0ksU0FBUyxlQUFlLENBQzdCLFFBQXNCLEVBQ3RCLFFBQXNCO0lBRXRCLE9BQU87UUFDTCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTztRQUM1QyxPQUFPLEVBQUUsT0FBTyxFQUFrQiwyQkFBMkI7S0FDOUQsQ0FBQztBQUNKLENBQUM7QUFFRDs7R0FFRztBQUNJLFNBQVMsZUFBZSxDQUM3QixRQUFzQixFQUN0QixRQUFzQjtJQUV0QixPQUFPO1FBQ0wsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU87UUFDNUMsT0FBTyxFQUFFLE9BQU8sRUFBa0IsMkJBQTJCO0tBQzlELENBQUM7QUFDSixDQUFDO0FBRUQsNkRBQTZEO0FBQzdELElBQU0sSUFBSSxHQUFrQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQzdELElBQU0sT0FBTyxHQUFpQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQy9ELElBQU0sRUFBRSxHQUFvQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQzdELElBQU0sR0FBRyxHQUFtQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUcsbUNBQW1DO0FBQ2xGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQVMsbUNBQW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiAtLS0tLS0tLS0tIEludGVyZmFjZXMgYXZlYyDigJxicmFuZOKAnSBwb3VyIGxlcyBkaWZmw6lyZW5jaWVyIC0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBM4oCZYXR0cmlidXQgYHJlYWRvbmx5IF9fYnJhbmRgIHNlcnQgdW5pcXVlbWVudCDDoCBkaXN0aW5ndWVyIGxlcyBkZXV4XG4gKiB0eXBlcyA6IHVuIG9iamV0IE1ham9yQ3JlZGl0cyBuZSBwb3VycmEgamFtYWlzIMOqdHJlIGFmZmVjdMOpIMOgIHVuZVxuICogdmFyaWFibGUgTWlub3JDcmVkaXRzLCBldCBpbnZlcnNlbWVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYWpvckNyZWRpdHMge1xuICBjcmVkaXRzOiBudW1iZXI7XG4gIHJlYWRvbmx5IF9fYnJhbmQ6ICdtYWpvcic7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWlub3JDcmVkaXRzIHtcbiAgY3JlZGl0czogbnVtYmVyO1xuICByZWFkb25seSBfX2JyYW5kOiAnbWlub3InO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSBGb25jdGlvbnMgdXRpbGl0YWlyZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBBZGRpdGlvbm5lIGRldXggTWFqb3JDcmVkaXRzIGV0IHJlbnZvaWUgdW4gbm91dmVsIG9iamV0IE1ham9yQ3JlZGl0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bU1ham9yQ3JlZGl0cyhcbiAgc3ViamVjdDE6IE1ham9yQ3JlZGl0cyxcbiAgc3ViamVjdDI6IE1ham9yQ3JlZGl0c1xuKTogTWFqb3JDcmVkaXRzIHtcbiAgcmV0dXJuIHtcbiAgICBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcbiAgICBfX2JyYW5kOiAnbWFqb3InLCAgICAgICAgICAgICAgICAgLy8gb24gZ2FyZGUgbGEgbWFycXVlIE1ham9yXG4gIH07XG59XG5cbi8qKlxuICogQWRkaXRpb25uZSBkZXV4IE1pbm9yQ3JlZGl0cyBldCByZW52b2llIHVuIG5vdXZlbCBvYmpldCBNaW5vckNyZWRpdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1NaW5vckNyZWRpdHMoXG4gIHN1YmplY3QxOiBNaW5vckNyZWRpdHMsXG4gIHN1YmplY3QyOiBNaW5vckNyZWRpdHNcbik6IE1pbm9yQ3JlZGl0cyB7XG4gIHJldHVybiB7XG4gICAgY3JlZGl0czogc3ViamVjdDEuY3JlZGl0cyArIHN1YmplY3QyLmNyZWRpdHMsXG4gICAgX19icmFuZDogJ21pbm9yJywgICAgICAgICAgICAgICAgIC8vIG9uIGdhcmRlIGxhIG1hcnF1ZSBNaW5vclxuICB9O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gRMOpbW8gcmFwaWRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuY29uc3QgbWF0aDogTWFqb3JDcmVkaXRzICA9IHsgY3JlZGl0czogMywgX19icmFuZDogJ21ham9yJyB9O1xuY29uc3QgcGh5c2ljczogTWFqb3JDcmVkaXRzID0geyBjcmVkaXRzOiA0LCBfX2JyYW5kOiAnbWFqb3InIH07XG5jb25zdCBwZTogTWlub3JDcmVkaXRzICAgID0geyBjcmVkaXRzOiAxLCBfX2JyYW5kOiAnbWlub3InIH07XG5jb25zdCBhcnQ6IE1pbm9yQ3JlZGl0cyAgID0geyBjcmVkaXRzOiAyLCBfX2JyYW5kOiAnbWlub3InIH07XG5cbmNvbnNvbGUubG9nKHN1bU1ham9yQ3JlZGl0cyhtYXRoLCBwaHlzaWNzKSk7ICAgLy8geyBjcmVkaXRzOiA3LCBfX2JyYW5kOiAnbWFqb3InIH1cbmNvbnNvbGUubG9nKHN1bU1pbm9yQ3JlZGl0cyhwZSwgYXJ0KSk7ICAgICAgICAgLy8geyBjcmVkaXRzOiAzLCBfX2JyYW5kOiAnbWlub3InIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==