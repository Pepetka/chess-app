import blackLogo from 'assets/black-king.png';
import whiteLogo from 'assets/white-king.png';
import { Figure, FigureName } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);

		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureName.KING;
	}

	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;

		if (Math.abs(this.cell.x - target.x) <= 1
			&& Math.abs(this.cell.y - target.y) <= 1) return true;

		return false;
	}
}
