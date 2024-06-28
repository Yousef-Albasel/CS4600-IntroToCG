// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
class Mat3 {
	constructor(a00=1,a01=0,a02=0,a10=0,a11=1,a12=0,a20=0,a21=0,a22=1) {
		this.mat3 = [
			[a00, a01, a02],
			[a10, a11, a12],
			[a20, a21, a22]
		];
	}

	matrixMultiplication(matrix3_02) {
		let outputMatrix = new Mat3();

		for (let row = 0; row < this.mat3.length; row++) {
			for (let col = 0; col < this.mat3[0].length; col++) {
				outputMatrix.mat3[row][col] =
					this.mat3[row][0] * matrix3_02.mat3[0][col] +
					this.mat3[row][1] * matrix3_02.mat3[1][col] +
					this.mat3[row][2] * matrix3_02.mat3[2][col];
			}
		}

		return outputMatrix;
	}
	stringify(){

		let outputString = "";

		for(let row = 0; row < this.mat3.length; row++ ){
			for(let col = 0; col < this.mat3[0].length; col++ ){
				outputString += this.mat3[row][col] + " ";
			}
			outputString += "\n ";
		}
		return outputString;
	}
	getOutputArray(){
		return Array(this.mat3[0][0], this.mat3[1][0], this.mat3[2][0], 
					this.mat3[0][1], this.mat3[1][1], this.mat3[2][1], 
					this.mat3[0][2], this.mat3[1][2], this.mat3[2][2] );
	}
}


function GetTransform(positionX, positionY, rotation, scale) {
    let scaleMat = new Mat3(scale, 0, 0, 0, scale, 0, 0, 0, 1);
    let angle = (rotation * (Math.PI / 180));
    let rotationMat = new Mat3(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);
	
    let translationMat = new Mat3(1, 0, positionX, 0, 1, positionY, 0, 0, 1);

    let TempMat = translationMat.matrixMultiplication(rotationMat.matrixMultiplication(scaleMat));
    
	return TempMat.getOutputArray();
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform( trans1, trans2 )
{
	let mat1 = new Mat3(trans1[0],trans1[3],trans1[6],trans1[1],trans1[4],trans1[7],trans1[2],trans1[5],trans1[8]);
	let mat2 = new Mat3(trans2[0],trans2[3],trans2[6],trans2[1],trans2[4],trans2[7],trans2[2],trans2[5],trans2[8]);

	let outputMatrix = mat2.matrixMultiplication(mat1);  

	return outputMatrix.getOutputArray(); 	
					
}
