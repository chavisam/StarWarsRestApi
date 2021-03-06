"""empty message

Revision ID: f00febccb361
Revises: 2807edd385a2
Create Date: 2021-11-15 22:27:26.567747

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f00febccb361'
down_revision = '2807edd385a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('character',
    sa.Column('character_id', sa.Integer(), nullable=False),
    sa.Column('character_name', sa.String(length=250), nullable=False),
    sa.Column('hair_color', sa.String(length=100), nullable=True),
    sa.Column('eye_color', sa.String(length=100), nullable=True),
    sa.Column('skin_color', sa.String(length=100), nullable=True),
    sa.Column('gender', sa.String(length=100), nullable=True),
    sa.Column('yob', sa.DateTime(), nullable=True),
    sa.Column('height', sa.Integer(), nullable=True),
    sa.Column('weight', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=400), nullable=True),
    sa.Column('homeworld', sa.String(length=250), nullable=True),
    sa.PrimaryKeyConstraint('character_id')
    )
    op.create_table('planet',
    sa.Column('planet_id', sa.Integer(), nullable=False),
    sa.Column('planet_name', sa.String(length=200), nullable=True),
    sa.Column('diameter', sa.Integer(), nullable=True),
    sa.Column('rotation_period', sa.Integer(), nullable=True),
    sa.Column('Orbital_period', sa.Integer(), nullable=True),
    sa.Column('gravity', sa.String(length=200), nullable=True),
    sa.Column('population', sa.Integer(), nullable=True),
    sa.Column('climate', sa.String(length=200), nullable=True),
    sa.Column('terrain', sa.String(length=200), nullable=True),
    sa.Column('description', sa.String(length=400), nullable=True),
    sa.Column('url', sa.String(length=200), nullable=True),
    sa.PrimaryKeyConstraint('planet_id')
    )
    op.create_table('starship',
    sa.Column('starship_id', sa.Integer(), nullable=False),
    sa.Column('model', sa.String(length=200), nullable=True),
    sa.Column('class_type', sa.String(length=200), nullable=True),
    sa.Column('manufacturer', sa.String(length=200), nullable=True),
    sa.Column('cost', sa.Integer(), nullable=True),
    sa.Column('length', sa.Integer(), nullable=True),
    sa.Column('crew', sa.Integer(), nullable=True),
    sa.Column('speed', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('starship_id')
    )
    op.create_unique_constraint(None, 'user', ['password'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user', type_='unique')
    op.drop_table('starship')
    op.drop_table('planet')
    op.drop_table('character')
    # ### end Alembic commands ###
